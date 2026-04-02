# Paylocity Playwright Framework

This repository contains a Playwright test framework for a Paylocity Benefits demo application. It includes UI tests for login and employee modal flows, and API tests for employee endpoints.

## Project structure

- `src/ui/` - UI page objects, tests, and flows
  - `src/ui/pages` - Page Object Models (LoginPage, EmployeePage)
  - `src/ui/tests` - UI test specs (`login.spec.ts`, `employee.add.spec.ts`) 
- `src/api/` - API client and service layers plus API tests
  - `src/api/clients` - low-level request wrappers
  - `src/api/services` - business logic around API responses
  - `src/api/tests` - API contract tests (`employee.api.spec.ts`)
- `src/fixtures` - fixture definitions for auth and shared test setup
- `src/test-data` - test data capabilities and factories (`employee.factory.ts`)
- `test-results` - generated test artifacts (screenshots, video, error contexts)
- `playwright.config.ts` - Playwright configuration.

## Setup

1. Ensure Node.js 18+ is installed.
2. Install dependencies:

```bash
npm install
npx playwright install
```

3. Add environment variables (`.env`):

```env
BASE_URL="https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees"
USER="TestUser943"
PASSWORD="+dB3deG/Z3]a"
AUTH_TOKEN="Basic VGVzdFVzZXI5NDM6K2RCM2RlRy9aM11h"  
LOGIN_URL="https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn"
```

> Adjust values to your environment.

## Test execution

### Available npm scripts

Quick commands from `package.json`:

```bash
npm test                    # Run all tests
npm run test:ui             # Run only UI tests (src/ui/tests)
npm run test:api            # Run only API tests (src/api/tests)
npm run test:debug          # Debug mode with step-by-step execution
npm run test:ui:debug       # Debug UI tests with visible browser
npm run test:headed         # Run all tests with visible browser
npm run test:report         # Generate HTML report and open it
npm run test:ci             # Run with JUnit reporter for CI/CD pipelines
```

### Basic commands

- Run all tests:
```bash
npx playwright test
```

- Run specific test file:
```bash
npx playwright test src/ui/tests/login.spec.ts
```

- Run tests by pattern:
```bash
npx playwright test --grep "login"
```

### Execution modes

- **Debug mode** (step-by-step with browser open):
```bash
npx playwright test --debug
```

- **UI mode** (interactive test runner):
```bash
npx playwright test --ui
```

- **Headed mode** (visible browser):
```bash
npx playwright test --headed
```

- **Headless mode** (default, faster):
```bash
npx playwright test --headless
```

### Browser selection

- Run on specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

- Run on all browsers:
```bash
npx playwright test --project=all
```

### Reporters

- **Line reporter** (concise output):
```bash
npx playwright test --reporter=line
```

- **HTML report** (detailed with screenshots):
```bash
npx playwright test --reporter=html
# Then open: npx playwright show-report
```

- **JSON report** (for CI/CD):
```bash
npx playwright test --reporter=json
```

- **JUnit report** (for CI/CD):
```bash
npx playwright test --reporter=junit
```

### Advanced options

- **Parallel execution** (faster runs):
```bash
npx playwright test --workers=4
```

- **Retry failed tests**:
```bash
npx playwright test --retries=2
```

- **Run with specific config**:
```bash
npx playwright test --config=playwright.ci.config.ts
```

- **Dry run** (show what would run):
```bash
npx playwright test --dry-run
```

### Environment-specific execution

- **Development**:
```bash
npm run test:dev
```

- **Production**:
```bash
npm run test:prod
```

- **CI/CD**:
```bash
npm run test:ci
```

### Test artifacts

After execution, check `test-results/` for:
- Screenshots (on failure)
- Videos (configurable in `playwright.config.ts`)
- Error context files
- HTML reports

### Common workflows

- **Quick smoke test**:
```bash
npx playwright test --project=chromium --reporter=line
```

- **Full regression with reports**:
```bash
npx playwright test --reporter=html --workers=3
```

- **Debug failing test**:
```bash
npx playwright test src/ui/tests/employee.add.spec.ts --debug --headed
```

## Current behavior

- `login.spec.ts` verifies login works.
- `employee.add.spec.ts` opens modal, fills fields and validates employee row in table.
- `employee.api.spec.ts` tests `GET /employees` and `POST /employees` through service + client layers.

## Notes

- The `EmployeePage` class uses dynamic fallback for Bootstrap modal show/hide when direct auto popup is flaky.
- `isEmployeeInList` uses row index scanning, not just element text filters, for accurate verification.

## Troubleshooting

- If tests fail due missing env variables, confirm `.env` values and file path.
- If modal tests fail in CI, the logic in `openAddEmployeeModal` may need updated selectors or wait conditions.

## Contact

For changes, update the test flows in `src/ui/pages/employee.page.ts` and the fixtures in `src/fixtures/auth.fixture.ts`.