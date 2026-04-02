import { test as base } from '@playwright/test';
import { LoginPage } from '../ui/pages/login.page';

type Fixtures = {
  loggedInPage: any;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await page.goto(process.env.LOGIN_URL);
    await login.login(process.env.USER!, process.env.PASSWORD!);
    await use(page);
  },
});

export { expect } from '@playwright/test';
