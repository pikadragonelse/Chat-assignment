import DEFAULT_AVT from '../../assets/default-avt.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'antd';

export type OnlineListHeader = { username?: string; onLogout?: () => void };
export const OnlineListHeader = ({ username, onLogout }: OnlineListHeader) => {
  return (
    <div className="flex justify-between p-2 w-full items-center bg-white/20 backdrop-blur-sm">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={DEFAULT_AVT} alt="" />
      </div>
      <h1 className="font-medium text-lg select-none">Online list</h1>
      <Tooltip title="Logout" arrow={false} placement="left">
        <div className="cursor-pointer p-1 group active:bg-zinc-100 rounded-md" onClick={onLogout}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="text-primary group-active:text-dark-primary text-xl mt-[2px]"
          />
        </div>
      </Tooltip>
    </div>
  );
};
