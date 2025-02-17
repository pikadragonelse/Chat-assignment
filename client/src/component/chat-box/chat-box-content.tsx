import { Avatar } from 'antd';
import React, { useState } from 'react';
import clsx from 'clsx';
import { isEndOfSequence, isMiddleOfSequence, isStartOfSequence } from '../../util/chatbox';

export const ChatBoxContent = () => {
  const [messageList, setMessageList] = useState<{ object: 'friend' | 'user'; message: string }[]>([
    { object: 'user', message: 'Xin chào!' },
    { object: 'user', message: 'Hôm nay bạn thế nào?' },
    { object: 'friend', message: 'Chào bạn! Mình ổn, còn bạn?' },
    { object: 'user', message: 'Mình cũng ổn. Bạn đang làm gì thế?' },
    { object: 'friend', message: 'Mình đang làm việc, hơi bận một chút.' },
    { object: 'friend', message: 'Bạn có cần gì không?' },
    { object: 'user', message: 'Không có gì quan trọng đâu, chỉ muốn tám chuyện thôi.' },
    { object: 'user', message: 'Nếu bận thì cứ làm việc tiếp nhé!' },
    { object: 'friend', message: 'Không sao đâu, mình vẫn có thời gian nói chuyện.' },
    { object: 'friend', message: 'Dạo này có gì mới không?' },
    { object: 'user', message: 'Mình vừa xem một bộ phim rất hay.' },
    { object: 'user', message: 'Bạn có thích xem phim không?' },
    { object: 'friend', message: 'Có chứ! Phim gì vậy?' },
    { object: 'user', message: "Bộ phim tên là 'Interstellar', rất ấn tượng!" },
    { object: 'friend', message: 'Nghe hay đấy, để mình xem thử.' },
    { object: 'user', message: 'Ok, xem xong nhớ review nhé!' },
    { object: 'friend', message: 'Chắc chắn rồi!' },
    { object: 'friend', message: 'Mình sẽ xem vào cuối tuần.' },
    { object: 'user', message: 'Tuyệt! Cuối tuần gặp nhau cà phê luôn nhé?' },
    { object: 'friend', message: 'Rất vui được gặp lại bạn!' },
  ]);

  return (
    <div className="h-[84vh] max-h-[84vh] pt-1 overflow-auto bg-white">
      <div className="flex flex-col gap-[0.1rem] px-2">
        {messageList.map((message, index) => (
          <div key={index} className="flex items-center gap-1">
            <div
              className={clsx({
                hidden: message.object === 'user',
              })}
            >
              <Avatar />
            </div>
            <div className="flex-grow flex flex-col gap-1 ">
              <div
                className={clsx('text-sm w-fit max-w-52 py-2 px-4 font-medium rounded-3xl mb-2', {
                  'text-zinc-50 bg-gradient-to-r from-primary to-dark-primary ml-auto   ':
                    message.object === 'user',
                  'text-zinc-800 bg-zinc-200 ': message.object === 'friend',
                  'rounded-tr-md rounded-br-md mb-0':
                    isMiddleOfSequence(messageList, index) && message.object === 'user',
                  'rounded-tr-3xl rounded-br-md mb-0':
                    isStartOfSequence(messageList, index) && message.object === 'user',
                  'rounded-br-3xl rounded-tr-md':
                    isEndOfSequence(messageList, index) && message.object === 'user',
                  'rounded-tl-md rounded-bl-md mb-0':
                    isMiddleOfSequence(messageList, index) && message.object === 'friend',
                  'rounded-tl-3xl rounded-bl-md mb-0':
                    isStartOfSequence(messageList, index) && message.object === 'friend',
                  'rounded-bl-3xl rounded-tl-md':
                    isEndOfSequence(messageList, index) && message.object === 'friend',
                })}
              >
                {message.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
