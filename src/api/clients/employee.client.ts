import type { APIRequestContext, APIResponse } from '@playwright/test';

export class EmployeeClient {
  constructor(private api: APIRequestContext) {}

  async getEmployees(): Promise<APIResponse> {
    return this.api.get('');
  }

  async createEmployee(data: any): Promise<APIResponse> {
    return this.api.post('', { data });
  }
}


