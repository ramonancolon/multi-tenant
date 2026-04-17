import { user } from './lib/types';

export const mockUsers: user[] = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  username: `user${i + 1}`,
  email: `User ${i + 1}`,
}));