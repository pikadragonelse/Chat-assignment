import { Avatar } from 'antd';
import clsx from 'clsx';
import { isEndOfSequence, isMiddleOfSequence, isStartOfSequence } from '../../util/chatbox';
import { Message } from '../../model/message';
import { useEffect, useRef } from 'react';

export type ChatBoxContent = { userId?: string; messageHistory?: Message[] };
export const ChatBoxContent = ({ userId, messageHistory = [] }: ChatBoxContent) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isUser = (senderId: string) => userId === senderId;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth', // Cuộn xuống mượt mà
      });
    }
  }, [messageHistory]);

  return (
    <div className=" h-[84vh] max-h-[84vh] pt-1 overflow-auto bg-white" ref={contentRef}>
      <div className="flex flex-col gap-[0.1rem] px-2">
        {messageHistory.map((message, index) => (
          <div
            key={index}
            className={clsx('flex items-center gap-1 ', {
              'mb-2': messageHistory[index + 1]?.receiver.id !== message.receiver.id,
              'mb-[1px]': messageHistory[index + 1]?.receiver.id === message.receiver.id,
            })}
          >
            <div
              className={clsx('w-10', {
                hidden: isUser(message.sender.id),
              })}
            >
              {messageHistory[index + 1]?.receiver.id === message.receiver.id ? undefined : (
                <Avatar />
              )}
            </div>
            <div className="flex-grow flex flex-col gap-1 ">
              <div
                className={clsx('text-sm w-fit max-w-52 py-2 px-4 font-medium rounded-3xl', {
                  //Define style color for sender
                  'text-zinc-50 bg-gradient-to-r from-primary to-dark-primary ml-auto': isUser(
                    message.sender.id,
                  ),

                  //Define style color for receiver
                  'text-zinc-800 bg-zinc-200 ': !isUser(message.sender.id),

                  //style shape when have a sequence of messages from sender
                  'rounded-tr-md rounded-br-md mb-0':
                    isMiddleOfSequence(messageHistory, index) && isUser(message.sender.id),
                  'rounded-tr-3xl rounded-br-md mb-0':
                    isStartOfSequence(messageHistory, index) && isUser(message.sender.id),
                  'rounded-br-3xl rounded-tr-md':
                    isEndOfSequence(messageHistory, index) && isUser(message.sender.id),

                  //style shape when have a sequence of messages from receiver
                  'rounded-tl-md rounded-bl-md mb-0':
                    isMiddleOfSequence(messageHistory, index) && !isUser(message.sender.id),
                  'rounded-tl-3xl rounded-bl-md mb-0':
                    isStartOfSequence(messageHistory, index) && !isUser(message.sender.id),
                  'rounded-bl-3xl rounded-tl-md':
                    isEndOfSequence(messageHistory, index) && !isUser(message.sender.id),
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
