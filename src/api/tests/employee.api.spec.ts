import { test, expect } from '@playwright/test';
import { getApiContext } from '../../utils/apiClient';
import { EmployeeClient } from '../clients/employee.client';
import { EmployeeService } from '../services/employee.service';
import { buildEmployee } from '../../test-data/employee.factory';

// Test to get employees via API
test('Get employees API', async () => {
  const api = await getApiContext();
  const client = new EmployeeClient(api);
  const service = new EmployeeService(client);
  const { response, body } = await service.getEmployees();

  const status = response.status();
  expect([200, 201]).toContain(status);
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);

  const employee = body[0];
  expect(employee).toHaveProperty('id');
  expect(employee).toHaveProperty('username');
  expect(employee).toHaveProperty('lastName');
});

// Test to create employee via API
test('Create employees API', async () => {
  const api = await getApiContext();
  const client = new EmployeeClient(api);
  const service = new EmployeeService(client);
  const newEmployee = buildEmployee();
  const { response, body } = await service.createEmployee(newEmployee);

  const status = response.status();
  expect([200, 201]).toContain(status);

  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('firstName');
  expect(body).toHaveProperty('lastName');
  expect(body).toHaveProperty('dependants');

  expect(body.firstName).toBe(newEmployee.firstName);
  expect(body.lastName).toBe(newEmployee.lastName);
  expect(body.dependants).toBe(newEmployee.dependants);
});