import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Form, Input, InputRef, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

type FormField = {
  message: string;
};

export const ChatBoxFooter = () => {
  const [form] = useForm();
  const inputRef = useRef<InputRef>(null);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Form
      form={form}
      onFinish={(data: FormField) => {
        // chatbot(data.query || '');
      }}
    >
      <Row align={'middle'}>
        <Col className="flex-1">
          <Form.Item<FormField> name={'message'} noStyle>
            <Input placeholder="Type message" ref={inputRef} />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item noStyle>
            <div
              onClick={() => (isRendering ? undefined : form.submit())}
              className={clsx(
                'hover:bg-zinc-100 p-2 flex justify-center rounded-lg cursor-pointer active:bg-zinc-200 group',
                {
                  'cursor-default': isRendering,
                },
              )}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={clsx('text-primary text-lg group-active:text-dark-primary select-none', {
                  'text-zinc-500 group-active-zinc-500': isRendering,
                })}
              />
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
