import { create } from 'zustand';
import { User } from '../model/user';

type ReceiverStore = {
  receiverState: User;
  setReceiverState: (userState: User) => void;
  clearReceiverState: () => void;
};

export const useReceiverStore = create<ReceiverStore>()((set) => ({
  receiverState: {
    id: '',
    username: '',
  },
  setReceiverState: (receiverState) => {
    set({ receiverState });
  },
  clearReceiverState: () => {
    set({ receiverState: { id: '', username: '' } });
  },
}));
