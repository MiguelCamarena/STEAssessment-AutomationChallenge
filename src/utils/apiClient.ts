import { request } from '@playwright/test';

// Create and return a new API request context
export async function getApiContext() {
  return await request.newContext({
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      Authorization: process.env.AUTH_TOKEN!,
      'Content-Type': 'application/json',
    },
  });
}
