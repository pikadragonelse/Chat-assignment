import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Form, Input, InputRef, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { PayloadSendMessage } from '../../model/message';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useReceiverStore } from '../../store/receiverStore';
import { useUserStore } from '../../store/userStore';

type FormField = {
  message: string;
};

export type ChatBoxFooter = { onSubmit?: (data: PayloadSendMessage) => void };
export const ChatBoxFooter = ({ onSubmit = () => {} }: ChatBoxFooter) => {
  const [form] = useForm();
  const inputRef = useRef<InputRef>(null);
  const receiverState = useReceiverStore((state) => state.receiverState);
  const userState = useUserStore((state) => state.userState);

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Form
      form={form}
      onFinish={(data: FormField) => {
        const payload: PayloadSendMessage = {
          message: data.message,
          receiver: receiverState,
          sender: userState,
        };
        form.setFieldValue('message', '');
        onSubmit(payload);
      }}
    >
      <Row align={'middle'}>
        <Col className="flex-1">
          <Form.Item<FormField> name={'message'} noStyle>
            <Input placeholder="Type message" ref={inputRef} autoComplete="off" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item noStyle>
            <div
              onClick={() => form.submit()}
              data-testid="send-message-btn"
              className={clsx(
                'hover:bg-zinc-100 p-2 flex justify-center rounded-lg cursor-pointer active:bg-zinc-200 group',
              )}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                className={clsx('text-primary text-lg group-active:text-dark-primary select-none')}
              />
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
