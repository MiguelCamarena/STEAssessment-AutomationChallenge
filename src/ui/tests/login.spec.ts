import { test, expect } from '../../fixtures/auth.fixture';
import { loginData } from '../../test-data/employee.data';

test('User can login successfully', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(new RegExp(loginData.validLogin.page));
});
