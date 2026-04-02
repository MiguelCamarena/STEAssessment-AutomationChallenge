import { test, expect } from '../../fixtures/auth.fixture';
import { buildEmployee } from '../../test-data/employee.factory';
import { EmployeePage } from '../pages/employee.page';


test('User can add employee via UI modal', async ({ loggedInPage }) => {
  const employeePage = new EmployeePage(loggedInPage);
  const newEmployee = buildEmployee();
  await employeePage.addEmployee(newEmployee.firstName, newEmployee.lastName, newEmployee.dependants.toString());
  const isVisible = await employeePage.isEmployeeInList(newEmployee.firstName, newEmployee.lastName);
  await expect(isVisible).toBe(true);
});
