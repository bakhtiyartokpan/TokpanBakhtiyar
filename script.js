    <script>
        let cashFlowChart = null;
        let npvChart = null;
        
        function addCashFlow() {
            const container = document.getElementById('cashFlowsContainer');
            const item = document.createElement('div');
            item.className = 'cash-flow-item';
            item.innerHTML = `
                <input type="number" class="cash-flow" placeholder="Year ${container.children.length + 1}" step="0.01">
                <button onclick="removeCashFlow(this)" style="width: auto; padding: 5px 10px;">✕</button>
            `;
            container.appendChild(item);
        }
        
        function removeCashFlow(btn) {
            btn.parentElement.remove();
        }
        
        function calculateNPV() {
            const discountRate = parseFloat(document.getElementById('discount').value) / 100;
            const initialInvestment = parseFloat(document.getElementById('initial').value);
            const cashFlowInputs = document.querySelectorAll('.cash-flow');
            
            if (!discountRate || !initialInvestment || cashFlowInputs.length === 0) {
                alert('Please fill in all required fields');
                return;
            }
            
            const cashFlows = Array.from(cashFlowInputs).map(input => parseFloat(input.value) || 0);
            
            // Calculate NPV
            let npv = -initialInvestment;
            const presentValues = [-initialInvestment];
            
            cashFlows.forEach((cf, index) => {
                const pv = cf / Math.pow(1 + discountRate, index + 1);
                npv += pv;
                presentValues.push(pv);
            });
            
            // Calculate Payback Period
            let payback = Infinity;
            let cumulative = -initialInvestment;
            for (let i = 0; i < cashFlows.length; i++) {
                cumulative += cashFlows[i];
                if (cumulative >= 0) {
                    payback = i + 1 - (cumulative - cashFlows[i]) / cashFlows[i];
                    break;
                }
            }
            
            // Calculate Profitability Index
            const totalInflow = cashFlows.reduce((a, b) => a + b, 0);
            const pv_inflows = cashFlows.reduce((sum, cf, i) => sum + (cf / Math.pow(1 + discountRate, i + 1)), 0);
            const pi = pv_inflows / initialInvestment;
            
            // Display Results
            document.getElementById('npvResult').textContent = `$${npv.toFixed(2)}`;
            document.getElementById('npvResult').className = `result-value ${npv >= 0 ? 'positive' : 'negative'}`;
            
            document.getElementById('paybackResult').textContent = payback === Infinity ? 'N/A' : `${payback.toFixed(2)}`;
            document.getElementById('piResult').textContent = `${pi.toFixed(2)}`;
            document.getElementById('inflowResult').textContent = `$${totalInflow.toFixed(2)}`;
            
            // Create Charts
            drawCharts(cashFlows, presentValues, discountRate);
        }
        
        function drawCharts(cashFlows, presentValues, discountRate) {
            // Cash Flow Chart
            const ctx1 = document.getElementById('cashFlowChart').getContext('2d');
            if (cashFlowChart) cashFlowChart.destroy();
            
            const years = ['Initial', ...cashFlows.map((_, i) => `Year ${i + 1}`)];
            cashFlowChart = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: years,
                    datasets: [{
                        label: 'Cash Flows',
                        data: presentValues,
                        backgroundColor: presentValues.map(v => v >= 0 ? '#28a745' : '#dc3545'),
                        borderColor: '#667eea',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: { text: 'Cash Flows Analysis' }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
            
            // NPV Cumulative Chart
            const ctx2 = document.getElementById('npvChart').getContext('2d');
            if (npvChart) npvChart.destroy();
            
            let cumulative = presentValues[0];
            const cumulativeNPV = [cumulative];
            for (let i = 1; i < presentValues.length; i++) {
                cumulative += presentValues[i];
                cumulativeNPV.push(cumulative);
            }
            
            npvChart = new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: years,
                    datasets: [{
                        label: 'Cumulative NPV',
                        data: cumulativeNPV,
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        borderColor: '#667eea',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 6,
                        pointBackgroundColor: '#667eea',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: { text: 'Cumulative NPV Over Time' }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        }
    </script>
