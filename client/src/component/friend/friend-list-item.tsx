import React from 'react';
import DEFAULT_AVT from '../../assets/default-avt.jpg';

export type FriendListItem = {
  avt?: string;
  name?: string;
  lastMessage?: string;
  isOnline?: boolean;
};
export const FriendListItem = ({ avt, name, lastMessage, isOnline }: FriendListItem) => {
  return (
    <div className="p-2 w-fit  flex gap-2 cursor-pointer hover:bg-secondary transition-all">
      <div className="relative">
        <div className="w-14 h-14 min-w-14 min-h-14 rounded-full overflow-hidden ">
          <img src={DEFAULT_AVT} alt="" />
        </div>
        <div className="w-4 h-4 absolute bottom-0 right-0 rounded-full bg-green-500 border-3 border-white" />
      </div>
      <div className="hidden lg:block select-none">
        <div className="font-medium text-lg w-[70vw] max-w-72 truncate overflow-hidden whitespace-nowrap">
          Name
        </div>
        <div className="text-gray-600 w-[70vw] max-w-72 truncate overflow-hidden whitespace-nowrap">
          asdkjfanksjdfnakjsdfnakjsdfnajkdsfnakjsdfnakjdsnfakjsdfnkajsdfk
        </div>
      </div>
    </div>
  );
};
