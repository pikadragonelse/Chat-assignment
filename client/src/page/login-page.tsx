import { LoginForm } from '../component/form/login-form';
import { Container } from '../component/container';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const userId = Cookies.get('userId');
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      navigate(`${userId}/online-list`);
      return;
    }
  }, []);

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};
