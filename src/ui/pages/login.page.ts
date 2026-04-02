import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#Username');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.getByRole('button', { name: /Log in/i });
  }

  async login(user: string, pass: string) {
    console.info(`Logging in with user: ${user}`);
    console.info(`Logging in with user: ${pass}`);
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}

