import { EmployeeClient } from '../clients/employee.client';

export class EmployeeService {
  // Constructor for EmployeeService
  constructor(private client: EmployeeClient) {}

  // Retrieve all employees
  async getEmployees() {
    const response = await this.client.getEmployees();
    const body = await response.json();
    return { response, body };
  }

    // Create a new employee
    async createEmployee(data: any) {
    const response = await this.client.createEmployee(data);
    const body = await response.json();

    return { response, body };
  }
}
