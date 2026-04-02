import { Page, Locator } from '@playwright/test';

export class TableComponent {
  // Page locators
  readonly page: Page;
  readonly rows: Locator;

  // Constructor for TableComponent
  constructor(page: Page) {
    this.page = page;
    this.rows = page.locator('table tbody tr');
  }

  // Get the number of rows in the table
  async getRowCount() {
    return await this.rows.count();
  }

  // Get the text of the last row in the table
  async getLastRowText() {
    const count = await this.rows.count();
    return await this.rows.nth(count - 1).innerText();
  }
}
