import { Page } from '@playwright/test';
import { EmployeePage } from '../pages/employee.page';

export class EmployeeFlow {
  private employeePage: EmployeePage;

  constructor(page: Page) {
    this.employeePage = new EmployeePage(page);
  }

  async createEmployee(firstName: string, lastName: string, dependants: string) {
    await this.employeePage.addEmployee(firstName, lastName, dependants);
  }
}
