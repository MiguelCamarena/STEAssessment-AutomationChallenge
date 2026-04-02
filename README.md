# 🚀 Paylocity Playwright Framework

End-to-end test automation framework built with Playwright + TypeScript, designed using scalable patterns for UI and API testing.

This project demonstrates a clean and maintainable architecture using:
- Page Object Model (POM)
- API Client/Service layers
- Test data factories
- Custom fixtures for authentication
- Allure reporting
- CI/CD pipeline with GitHub Actions

---

## 📂 Project Structure

```bash
.
├── src
│   ├── api
│   │   ├── clients        # Low-level HTTP requests
│   │   ├── services       # Business logic layer
│   │   └── tests          # API test specs
│   │
│   ├── ui
│   │   ├── pages          # Page Object Models
│   │   ├── components     # Reusable UI components
│   │   ├── flows          # Business flows
│   │   └── tests          # UI test specs
│   │
│   ├── fixtures           # Custom Playwright fixtures
│   ├── test-data          # Static data + factories
│   └── utils              # Shared utilities
│
├── test-results           # Screenshots, videos, traces
├── playwright.config.ts   # Global config
├── .env                   # Environment variables
└── README.md
```

## 🧠 Architecture Overview

### UI Layer
- Pages → encapsulate locators and actions  
- Components → reusable UI elements  
- Flows → business-level interactions  

Example:
await employeeFlow.createEmployee(...)

---

### API Layer
- Client → HTTP request handling  
- Service → response parsing & validation  
- Tests → assertions  

Example:
const { response, body } = await service.createEmployee(data);

---

### Test Data Strategy
- Static data → employee.data.ts  
- Dynamic data → employee.factory.ts  

Example:
const newEmployee = buildEmployee();

✔ Avoids collisions  
✔ Enables parallel execution  

---

### Fixtures

test('example', async ({ loggedInPage }) => {

✔ Centralized authentication  
✔ Reusable sessions  
✔ Cleaner tests  

---

## 🧪 Test Coverage

This framework currently includes **base test cases** that validate the core functionality of the application:

- User login (UI)
- Employee creation via UI modal
- Get employees API
- Create employee API

These tests are designed as a **foundation** and can be easily extended.

### 🔥 Extensibility

The architecture allows adding more test cases without modifying existing logic:

- Add new UI scenarios under `src/ui/tests`
- Add new API validations under `src/api/tests`
- Reuse existing pages, flows, and services
- Extend test-data factories for new scenarios

Examples of additional test cases that can be implemented:

- Negative scenarios (invalid inputs, validation errors)
- Edge cases (empty data, max limits)
- Update and delete employee flows
- API contract/schema validation
- Role-based access testing

✔ Designed for scalability  
✔ Supports parallel execution  
✔ Easy to maintain and extend  

---

## ⚙️ Setup

1. Install dependencies  
npm install  

2. Install Playwright browsers  
npx playwright install  

3. Configure environment  

Create .env file:

BASE_URL=https://your-app-url  
LOGIN_URL=https://your-login-url  
USER=your_user  
PASSWORD=your_password  

---

## ▶️ Running Tests

Run all tests  
npm test  

UI tests  
npm run test:ui  

API tests  
npm run test:api  

Debug mode  
npm run test:debug  

UI Debug (headed)  
npm run test:ui:debug  

Headed mode  
npm run test:headed  

---

## 📊 Reporting

Playwright HTML Report  
npx playwright show-report  

---

### Allure Report

Generate and open Allure report:  
npm run allure:report  

Note: Allure requires Java (JDK 11+). Make sure JAVA_HOME is configured.

---

### Allure Features

- Step-by-step execution logs  
- Screenshots on failure  
- Video & trace attachments  
- Better debugging visibility  

---

## ⚙️ CI/CD Pipeline

This project includes a GitHub Actions pipeline that:

- Runs UI and API tests on every push  
- Installs Playwright browsers  
- Generates Allure and Playwright reports  
- Uploads artifacts for analysis  

Workflow file:  
.github/workflows/playwright.yml  

---

## 🧪 Example Tests

UI Test  
test('User can add employee', async ({ loggedInPage }) => {
  const employeePage = new EmployeePage(loggedInPage);
  const newEmployee = buildEmployee();
  await employeePage.addEmployee(...);
});

---

API Test  
test('Create employee API', async () => {
  const service = new EmployeeService(client);
  const newEmployee = buildEmployee();
  const { response, body } = await service.createEmployee(newEmployee);
  expect(response.status()).toBe(200);
});

---

## 🧪 Best Practices Implemented

✔ Separation of concerns (UI vs API)  
✔ Scalable architecture (POM + Services)  
✔ Reusable components and flows  
✔ Data-driven testing  
✔ Factory pattern for test data  
✔ Custom fixtures for auth  
✔ Reduced flaky tests  

---

## ⚠️ Future Improvements

- Schema validation (AJV / Zod)  
- Test tagging strategy (smoke/regression)  
- Parallel execution tuning  
- Integration with test management tools  
- Allure history trends  

---

## 👨‍💻 Author

Miguel Camarena  
Senior QA Automation Engineer (17+ years experience)

---

## 🧨 TL;DR

This project demonstrates:

- Strong test automation architecture  
- Real-world UI and API testing approach  
- CI/CD integration  
- Production-ready reporting  
- Scalable foundation for expanding test coverage  
