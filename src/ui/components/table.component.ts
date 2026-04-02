import { Page, Locator } from '@playwright/test';

export class TableComponent {
  readonly page: Page;
  readonly rows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rows = page.locator('table tbody tr');
  }

  async getRowCount() {
    return await this.rows.count();
  }

  async getLastRowText() {
    const count = await this.rows.count();
    return await this.rows.nth(count - 1).innerText();
  }
}
