import React from 'react';
import { Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const { Item } = Form;

type FormField = {
  username: string;
};

export const LoginForm = () => {
  return (
    <div className="w-52 md:w-80 bg-white/70 p-4 rounded-md backdrop-blur-xs overflow-hidden">
      <h1 className="text-xl font-medium text-center mb-4">Login</h1>
      <Form>
        <Item<FormField> name="username">
          <Input placeholder="Username" prefix={<FontAwesomeIcon icon={faUser} size="sm" />} />
        </Item>
        <Item>
          <Button htmlType="submit" className="w-full" type="primary">
            Login
          </Button>
        </Item>
      </Form>
    </div>
  );
};
