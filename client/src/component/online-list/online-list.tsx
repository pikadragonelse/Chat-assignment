import { FriendListItem } from './online-list-item';

import { UserState } from '../../model/user';

export type FriendList = { onlineList?: UserState[] };
export const FriendList = ({ onlineList = [] }: FriendList) => {
  return (
    <div className={`h-[84vh] max-h-[84vh] overflow-auto w-fit m-auto`}>
      {onlineList.map((item) => (
        <FriendListItem name={item.username} isOnline={item.online} id={item.id} />
      ))}
    </div>
  );
};
