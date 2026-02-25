# Personal Assignment 1

## Objective

Create a small **web-based calculator** that takes personal data as input, processes it using a formula of your choice, and displays output.  

This task will help you understand:

- Variables  
- Conditional logic (`if/else`)  
- Input → Process → Output flow  

You are free to choose the type of calculation, but it should be **realistic, measurable, and meaningful**.

---

## Assignment Guidelines

### Allowed Technologies

- **HTML** — for form inputs and output display  
- **CSS** — for styling and layout  
- **JavaScript** — for logic, calculations, and output  

---

### Input Requirements

Your calculator should take **at least two inputs** from the user. Examples:

- Weight & height → BMI  
- Power & hours → Electricity cost  
- Distance & time → Pace  
- Any other real-world values you choose  

> You are encouraged to **think creatively**. Inputs should be measurable and realistic.

---

### Process Requirements

Your JavaScript must:

- Store input values in **variables**  
- Perform **at least one calculation**  
- Use **if/else conditions** to classify or interpret results  
- You may define your **own calculation formula**, or use a known index like BMI  

---

### Output Requirements

Your page must:

- Display output **directly in HTML** (not just console)  
- Include a **personalized message** (e.g., “Hello, [Name]”)  
- Show **calculated value(s)**  
- Show **category or interpretation** if relevant
---

### Submission Instructions

1. **Fork** this repository  
2. Create a new branch:  
3. Complete your assignment in the four files:  
- `index.html`  
- `style.css`  
- `script.js`  
- `README.md` (update with your description or notes if needed)  
4. Commit & push your branch to your GitHub fork  
5. Be ready for an **oral explanation** of your solution  

---

### Evaluation & Oral Assessment

During the oral assessment, you should be able to explain:

- What each input represents  
- How calculations are done  
- How conditional logic determines categories  
- What happens if inputs are unusual  
- How binary or optional output is calculated  

> ⚠️ **Important AI Guidance:**  
> You **may use AI tools** for suggestions or syntax help, but you must **fully understand and be able to explain every line** of your code.  
> The **logic, calculations, and outputs must be your own work** — AI is a helper, not a replacement.

---

### Creativity & Flexibility

- You may choose a different calculation than BMI, Electricity, or Pace  
- You may add **extra outputs or optional features**  
- You may **style your page creatively**  

> The goal is **computational thinking, problem-solving, and clear input → process → output understanding**.

---

### Your Submission Should Include

- `index.html` → form placeholder for user inputs and output  
- `style.css` → styling for the page  
- `script.js` → JavaScript file for calculations and logic  
- `README.md` → clear explanation of your project and description of your solution

My project calculates the NPV(Net present value) based on the data provided by user. Firstly, let’s answer the question: what is NPV? 
We know that every currency in the World tends to have a smaller value each year. This happens because of the inflation. My calculator counts the ‘real’ profit based on the currency of the first year. For example:
Patrick invested 100 dollars to the project and he gets 40 dollar per year from it. Discount rate, the rate of the inflation, is 4% each year. Therefore, we divide 40 by 1.04, then by 1.04^2, then by 1.04^3 and so on until his project will make some profit based on the initial investments, the value of the currency on the year 0. 
My calculator counts the NPV based on the data that user provided. Also, to make it easier to understand it has a charts. User types the discount rate, the cashflow of the each year, and the initial investments. By doing so, user will find the NPV, Payback period(the amount of time needed for a project to be profitable), and Profitability index. 

I used some AI to make the code, since I don’t know coding, but after some video explanations I started to understand the code and what functions each part of the code does. The first part of the code introduces the CSS code for design. Next part made by HTML is made for labeling and fundament of the code, and lastly the JS used for scripts and calculations. 
The calculations were made by special formula of the NPV. Regarding profitability index, we can use the formula where we adding Initial Investments to the NPV, and dividing it by the Initial investments. 
