/**
 * Fake Auth hook for testing
 */

const useAuth = (inValidUser: boolean = false) =>
  inValidUser ? { user: null } : { user: { id: 1, name: "Mosh" } };

export default useAuth;
