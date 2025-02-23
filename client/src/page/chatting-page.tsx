import { useEffect, useState } from 'react';
import { ChatBoxHeader } from '../component/chat-box/chat-box-header';
import { ChatBoxContent } from '../component/chat-box/chat-box-content';
import { ChatBoxFooter } from '../component/chat-box/chat-box-footer';
import { Container } from '../component/container';
import Cookies from 'js-cookie';
import api from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import { UserState } from '../model/user';
import { PayloadSendMessage, Message } from '../model/message';
import { getSocket } from '../service/socket';
import { useReceiverStore } from '../store/receiverStore';
import { useUserStore } from '../store/userStore';

export const ChattingPage = () => {
  const userId = Cookies.get('userId');
  const { friendId } = useParams();
  const navigate = useNavigate();
  const [friendName, setFriendName] = useState('');
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);
  const { clearReceiverState, setReceiverState } = useReceiverStore();
  const { setUserState } = useUserStore();

  const handleGetChattingHistory = async () => {
    try {
      const response = await api.get(`/api/messages/history/${userId}/${friendId}`);
      setMessageHistory(response.data);
    } catch (error) {
      navigate(`/${userId}/online-list`);
      console.log(error);
    }
  };

  //Lack of api to get friend information so need to get all online users to get it.
  // And in case you think why dont we get it from message history api, that because this history maybe is empty in first time
  const handleGetFriendName = async () => {
    try {
      const response = await api.get('/api/users/online');
      const friends = response.data as UserState[];
      const friend = friends.find((user) => user.id === friendId);
      const user = friends.find((user) => user.id === userId);

      setFriendName(friend?.username || '');
      setReceiverState({ username: friend?.username || '', id: friend?.id || '' });
      setUserState({ username: user?.username || '', id: user?.id || '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendMessage = (data: PayloadSendMessage) => {
    const socket = getSocket();
    if (socket) {
      console.log('Data sent:', data);

      socket.emit('message:send', data);
    }
  };

  const handleBackToOnlineList = () => {
    clearReceiverState();
    navigate(`/${userId}/online-list`);
  };

  useEffect(() => {
    if (userId) {
      handleGetChattingHistory();
      handleGetFriendName();
    } else {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    const socket = getSocket();

    if (!socket) return;

    socket.on('message:receive', (response: { event: string; data: Message }) => {
      console.log('Data received', response);

      setMessageHistory((prevMessages) => [...prevMessages, response.data]);
    });

    socket.on('error', (error) => {
      console.log('Socket error:', error);
    });

    return () => {
      socket.off('message:receive'); // Cleanup listener khi component unmount
      socket.off('error');
    };
  }, []);

  return (
    <Container>
      <div className="flex flex-col min-w-80 w-[50vw] bg-white rounded-lg overflow-hidden">
        <ChatBoxHeader userId={userId} friendName={friendName} onBack={handleBackToOnlineList} />
        <ChatBoxContent userId={userId} messageHistory={messageHistory} />
        <div className="p-2 ">
          <ChatBoxFooter onSubmit={(payload) => handleSendMessage(payload)} />
        </div>
      </div>
    </Container>
  );
};
