import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import './app.css';
import { LoginPage } from '../page/login-page';
import { OnlineListPage } from '../page/online-list-page';
import { NotFoundPage } from '../page/not-found-page';
import { ChattingPage } from '../page/chatting-page';
import { CookiesProvider } from 'react-cookie';
import { useEffect } from 'react';
import { connectSocket, getSocket } from '../service/socket';
import Cookies from 'js-cookie';

export function App() {
  const userId = Cookies.get('userId');
  useEffect(() => {
    connectSocket();

    if (userId) {
      const socket = getSocket();
      if (socket) socket.emit('user:login', { id: userId });
    }
  }, []);

  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBorderColor: '#009E84',
              hoverBorderColor: '#16c4a8',
              activeShadow: '0 0 0 2px #16c4a842',
            },
          },
          token: {
            colorPrimary: '#009E84',
          },
        }}
      >
        <StyleProvider hashPriority="high">
          <BrowserRouter>
            <Routes>
              <Route path="" element={<LoginPage />} />
              <Route path=":userId/online-list" element={<OnlineListPage />} />
              <Route path=":userId/chatbox/:friendId" element={<ChattingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </StyleProvider>
      </ConfigProvider>
    </CookiesProvider>
  );
}

export default App;
