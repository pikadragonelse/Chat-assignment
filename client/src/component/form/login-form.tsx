import { Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import api from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { User } from '../../model/user';
import Cookies from 'js-cookie';
import { getSocket } from '../../service/socket';
import useNotification from 'antd/es/notification/useNotification';

type FormField = {
  username: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUserState } = useUserStore();
  const [apiNoti, contextHolder] = useNotification();

  const handleLogin = async (data: FormField) => {
    try {
      const response = await api.post('/api/auth/login', data);
      const { id, username } = response.data as User;
      Cookies.set('userId', id, { expires: 1, secure: true });
      setUserState({ id, username });
      const socket = getSocket();
      if (socket) socket.emit('user:login', { id, username });
      navigate(`${id}/online-list/`);
    } catch (error) {
      console.log(error);
      apiNoti.error({ message: 'Username is used', placement: 'bottomRight' });
    }
  };

  return (
    <div className="w-52 md:w-80 bg-white/70 p-4 rounded-md backdrop-blur-xs overflow-hidden">
      {contextHolder}
      <h1 className="text-xl font-medium text-center mb-4">Login</h1>
      <Form
        onFinish={(data) => {
          handleLogin(data);
        }}
      >
        <Form.Item<FormField>
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            placeholder="Username"
            prefix={<FontAwesomeIcon icon={faUser} size="sm" className="mr-1" />}
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="w-full" type="primary">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
