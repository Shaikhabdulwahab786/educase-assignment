export type UserData = {
  id: string | number;
  name: string;
  email: string;
  password?: string; // for login test
};

export const fakeUsers: UserData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "1234" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", password: "1234" },
  { id: "abc", name: "Alice Test", email: "alice@test.com", password: "1234" },
];

export function addFakeUser(user: UserData) {
  fakeUsers.push(user);
}
