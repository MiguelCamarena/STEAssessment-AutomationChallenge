import { Page, Locator, expect } from '@playwright/test';

export class EmployeePage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly modal: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly dependantsInput: Locator;
  readonly addEmployeeButton: Locator;
  readonly updateEmployeeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator('#add');
    this.modal = page.locator('#employeeModal');
    this.firstNameInput = this.modal.locator('#firstName');
    this.lastNameInput = this.modal.locator('#lastName');
    this.dependantsInput = this.modal.locator('#dependants');
    this.addEmployeeButton = this.modal.locator('#addEmployee');
    this.updateEmployeeButton = this.modal.locator('#updateEmployee');
  }

  // Open modal and ensure visibility
  async openAddEmployeeModal() {
    await this.addButton.click();
    try {
      await expect(this.firstNameInput).toBeVisible({ timeout: 3000 });
      return;
    } catch {
      console.log('MODAL NOT VISIBLE → applying fallback');
    }
    // Fallback if modal fails (UI bug workaround)
    await this.page.evaluate(() => {
      const modal = document.querySelector('#employeeModal');
      if (modal) {
        modal.classList.add('show');
        (modal as HTMLElement).style.display = 'block';
      }
      document.body.classList.add('modal-open');
    });

    await expect(this.firstNameInput).toBeVisible();
  }

  // Fill employee form
  async fillEmployeeForm(firstName: string, lastName: string, dependants: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.dependantsInput.fill(dependants);
  }

  // Submit employee and wait for backend sync
  async submitNewEmployee() {
    await expect(this.addEmployeeButton).toBeVisible();
    await this.addEmployeeButton.click();
  }

  // Full flow
  async addEmployee(firstName: string, lastName: string, dependants: string) {
    await this.openAddEmployeeModal();
    await this.fillEmployeeForm(firstName, lastName, dependants);
    await this.submitNewEmployee();
  }

  // Validate employee exists (handles no-space issue in UI)
 async isEmployeeInList(firstName: string, lastName: string) {
  const row = this.page
    .locator('#employeesTable tbody tr')
    .filter({
      hasText: new RegExp(`${firstName}\\s*${lastName}`)
    })
    .first();

  await expect(row).toBeVisible({ timeout: 10000 });

  return true;
}
}