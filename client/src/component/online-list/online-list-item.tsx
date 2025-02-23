import DEFAULT_AVT from '../../assets/default-avt.jpg';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export type FriendListItem = {
  id?: string;
  avt?: string;
  name?: string;
  lastMessage?: string;
  isOnline?: boolean;
};
export const FriendListItem = ({ id, avt, name, lastMessage, isOnline }: FriendListItem) => {
  const userId = Cookies.get('userId');
  const navigate = useNavigate();

  const handleGoToChatBox = () => {
    navigate(`/${userId}/chatbox/${id}`);
  };

  return (
    <div
      className={clsx(`p-2 w-fit  flex gap-2   transition-all`, {
        'cursor-pointer hover:bg-secondary': userId !== id,
      })}
      onClick={userId === id ? undefined : handleGoToChatBox}
    >
      <div className="relative">
        <div className="w-14 h-14 min-w-14 min-h-14 rounded-full overflow-hidden ">
          <img src={DEFAULT_AVT} alt="" />
        </div>
        <div className="w-4 h-4 absolute bottom-0 right-0 rounded-full bg-green-500 border-3 border-white" />
      </div>
      <div className="select-none">
        <div className="font-medium text-lg w-[70vw] max-w-72 truncate overflow-hidden whitespace-nowrap">
          {name}&nbsp;{userId === id ? '(You)' : ''}
        </div>
        <div className="text-gray-600 w-[70vw] max-w-72 truncate overflow-hidden whitespace-nowrap">
          Online
        </div>
      </div>
    </div>
  );
};
