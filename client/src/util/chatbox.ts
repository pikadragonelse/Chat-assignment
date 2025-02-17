export const isStartOfSequence = (
  messages: { object: 'friend' | 'user'; message: string }[],
  index: number,
) => {
  if (index === messages.length - 1) return false;
  if (index === 0) return messages[index]?.object === messages[index + 1]?.object;
  return (
    messages[index]?.object !== messages[index - 1]?.object &&
    messages[index]?.object === messages[index + 1]?.object
  );
};

export const isEndOfSequence = (
  messages: { object: 'friend' | 'user'; message: string }[],
  index: number,
) => {
  if (index === 0) return false;
  if (index === messages.length - 1) return messages[index]?.object !== messages[index + 1]?.object;
  return (
    messages[index]?.object !== messages[index + 1]?.object &&
    messages[index]?.object === messages[index - 1]?.object
  );
};

export const isMiddleOfSequence = (
  messages: { object: 'friend' | 'user'; message: string }[],
  index: number,
) => {
  if (index === 0 || index === messages.length - 1) return false;
  return (
    messages[index]?.object === messages[index - 1]?.object &&
    messages[index]?.object === messages[index + 1]?.object
  );
};
