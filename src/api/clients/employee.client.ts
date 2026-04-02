import type { APIRequestContext, APIResponse } from '@playwright/test';

export class EmployeeClient {
  // Constructor for EmployeeClient
  constructor(private api: APIRequestContext) {}

  // Get all employees via API
  async getEmployees(): Promise<APIResponse> {
    return this.api.get('');
  }

  // Create employee via API
  async createEmployee(data: any): Promise<APIResponse> {
    return this.api.post('', { data });
  }
}


