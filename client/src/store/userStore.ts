import { create } from 'zustand';
import { User } from '../model/user';

type UserStore = {
  userState: User;
  setUserState: (userState: User) => void;
  clearUserState: () => void;
};

export const useUserStore = create<UserStore>()((set) => ({
  userState: {
    id: '',
    username: '',
  },
  setUserState: (userState) => {
    set({ userState });
  },
  clearUserState: () => {
    set({ userState: { id: '', username: '' } });
  },
}));
