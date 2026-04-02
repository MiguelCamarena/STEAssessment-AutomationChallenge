import { EmployeeClient } from '../clients/employee.client';

export class EmployeeService {
  constructor(private client: EmployeeClient) {}

  async getEmployees() {
    const response = await this.client.getEmployees();
    const body = await response.json();
    return { response, body };
  }

    async createEmployee(data: any) {
    const response = await this.client.createEmployee(data);
    const body = await response.json();

    return { response, body };
  }
}
