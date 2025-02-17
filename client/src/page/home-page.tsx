import React, { useState } from 'react';
import { Header } from '../component/header';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FriendList } from '../component/friend/friend-list';
import { useParams } from 'react-router-dom';
import { ChatBox } from '../component/chat-box/chat-box';

export const HomePage = () => {
  const params = useParams();

  return (
    <div className="relative">
      <div className="flex">
        <div className="border-r border-solid border-zinc-300 ">
          <Header />
          <div className="hidden lg:block p-2">
            <Input
              placeholder="Searching"
              prefix={<FontAwesomeIcon icon={faSearch} className="mr-1" />}
            />
          </div>
          <div className="">
            <FriendList />
          </div>
        </div>
        <div className="w-full">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};
