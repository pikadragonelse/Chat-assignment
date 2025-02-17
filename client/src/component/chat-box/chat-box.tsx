import React from 'react';
import { ChatBoxHeader } from './chat-box-header';
import { ChatBoxContent } from './chat-box-content';
import { ChatBoxFooter } from './chat-box-footer';

export type ChatBox = { friendId?: string };
export const ChatBox = ({ friendId }: ChatBox) => {
  return (
    <div className="flex flex-col ">
      <ChatBoxHeader />
      <div className="">
        <ChatBoxContent />
      </div>
      <div className=" p-2 bg-white">
        <ChatBoxFooter />
      </div>
    </div>
  );
};
