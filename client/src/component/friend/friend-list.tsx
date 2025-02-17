import React from 'react';
import { FriendListItem } from './friend-list-item';

export const FriendList = () => {
  return (
    <div className={`h-[85vh] max-h-[85vh] overflow-auto w-fit m-auto`}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <FriendListItem />
      ))}
    </div>
  );
};
