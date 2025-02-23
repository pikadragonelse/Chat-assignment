import { useEffect, useState } from 'react';
import { OnlineListHeader } from '../component/online-list/online-list-header';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FriendList } from '../component/online-list/online-list';
import { useNavigate } from 'react-router-dom';
import { Container } from '../component/container';
import { useUserStore } from '../store/userStore';
import api from '../service/api';
import Cookies from 'js-cookie';
import { ResponseSocketUserOnline, UserState } from '../model/user';
import { getSocket } from '../service/socket';

export const OnlineListPage = () => {
  const navigate = useNavigate();
  const { clearUserState, userState } = useUserStore();
  const [onlineList, setOnlineList] = useState<UserState[]>([]);
  const socket = getSocket();

  const userId = Cookies.get('userId');

  const getOnlineUsers = async () => {
    try {
      const response = await api.get('api/users/online');
      const onlineList = response.data as UserState[];
      setOnlineList(onlineList);
    } catch {
      console.log('Failed to get online users');
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/api/auth/logout', { userId });
      Cookies.remove('userId');
      const socket = getSocket();
      if (socket) socket.emit('user:logout', userState);
      clearUserState();
      navigate('/');
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOnlineUsers();
    if (!socket) return;

    socket.on('usersOnline', (response: ResponseSocketUserOnline) => {
      console.log('user online: ', response);

      setOnlineList(response.data);
    });

    return () => {
      socket.off('usersOnline'); // Cleanup listener khi component unmount
    };
  }, []);

  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, []);

  return (
    <Container>
      <div className="relative bg-white rounded-lg overflow-hidden">
        <div className="flex">
          <div className="border-r border-solid border-zinc-300 ">
            <OnlineListHeader onLogout={handleLogout} />
            <div className="p-2">
              <Input
                placeholder="Searching"
                prefix={<FontAwesomeIcon icon={faSearch} className="mr-1" />}
              />
            </div>
            <div className="">
              <FriendList onlineList={onlineList} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
