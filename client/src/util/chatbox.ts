import { Message } from '../model/message';

export const isStartOfSequence = (messages: Message[], index: number) => {
  if (index === messages.length - 1) return false;
  if (index === 0) return messages[index]?.sender.id === messages[index + 1]?.sender.id;
  return (
    messages[index]?.sender.id !== messages[index - 1]?.sender.id &&
    messages[index]?.sender.id === messages[index + 1]?.sender.id
  );
};

export const isEndOfSequence = (messages: Message[], index: number) => {
  if (index === 0) return false;
  if (index === messages.length - 1)
    return messages[index]?.sender.id !== messages[index + 1]?.sender.id;
  return (
    messages[index]?.sender.id !== messages[index + 1]?.sender.id &&
    messages[index]?.sender.id === messages[index - 1]?.sender.id
  );
};

export const isMiddleOfSequence = (messages: Message[], index: number) => {
  if (index === 0 || index === messages.length - 1) return false;
  return (
    messages[index]?.sender.id === messages[index - 1]?.sender.id &&
    messages[index]?.sender.id === messages[index + 1]?.sender.id
  );
};
