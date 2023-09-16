/**
 * Mock user data
 */
export interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: "Mosh" },
  { id: 2, name: "John" },
  { id: 3, name: "Alice" },
];

const getAll = (): Promise<User[]> =>
  new Promise((resolve) => {
    resolve(users);
  });
const get = (id: string): Promise<User> =>
  new Promise((resolve, reject) => {
    let userId: number;
    try {
      userId = parseInt(id);
      const user = users.find((user: User) => user.id === userId);
      if (!user) throw new Error(`User ${id} not found`);
      resolve(user);
    } catch (error) {
      console.error(error);
      reject("Invalid user ID");
    }
  });

const useUsers = () => {
  return {
    getAll,
    get,
  };
};

export default useUsers;
