import { wait } from '@/lib/utils';

export const login = async (provider: string) => {
  await wait(1000);

  window.localStorage.setItem('isLoggedIn', 'true');
};

export const logout = async () => {
  await wait(1000);

  window.localStorage.removeItem('isLoggedIn');
};

export const isLoggedIn = () => {
  return window.localStorage.getItem('isLoggedIn') === 'true';
};
