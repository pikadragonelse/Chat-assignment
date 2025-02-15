import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

import './app.css';
import { LoginPage } from '../page/login-page';
import { HomePage } from '../page/home-page';

export function App() {
  return (
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
            <Route path="home/:userId" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
