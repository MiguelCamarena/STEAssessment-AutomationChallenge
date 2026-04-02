import { Page } from '@playwright/test';
import { EmployeePage } from '../pages/employee.page';

export class EmployeeFlow {
  // Private page object
  private employeePage: EmployeePage;

  // Constructor for EmployeeFlow
  constructor(page: Page) {
    this.employeePage = new EmployeePage(page);
  }

  // Create a new employee
  async createEmployee(firstName: string, lastName: string, dependants: string) {
    await this.employeePage.addEmployee(firstName, lastName, dependants);
  }
}
