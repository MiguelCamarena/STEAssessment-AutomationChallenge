export function buildEmployee(overrides = {}) {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);

  return {
    firstName: `TEST_${random}`,
    lastName: `AUTOMATION_${timestamp}`,
    dependants: random % 23,  
  };
}