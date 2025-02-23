import DEFAULT_AVT from '../../assets/default-avt.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';

export type ChatBoxHeader = { userId?: string; friendName?: string; onBack?: () => void };
export const ChatBoxHeader = ({ userId, friendName, onBack }: ChatBoxHeader) => {
  return (
    <div className="h-16 flex justify-between p-2 w-full items-center  top-0 z-50 bg-white border-b border-zinc-200 border-solid  ">
      <div className="flex gap-4 items-center">
        <div className="cursor-pointer mt-2" onClick={onBack}>
          <FontAwesomeIcon icon={faChevronLeft} className="text-primary text-xl mt-[2px]" />
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <div className="w-10 h-10 min-w-10 min-h-10 rounded-full overflow-hidden ">
              <img src={DEFAULT_AVT} alt="" />
            </div>
            <div className="w-3 h-3 absolute bottom-0 right-0 rounded-full bg-green-500 border-3 border-white" />
          </div>
          <div className="">
            <h1 className="font-medium">{friendName}</h1>
            <p className="text-sm text-gray-500 select-none ">online</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faPhone} className="text-primary text-xl mt-[2px] cursor-pointer" />
        <FontAwesomeIcon icon={faVideo} className="text-primary text-xl mt-[2px] cursor-pointer" />
      </div>
    </div>
  );
};
