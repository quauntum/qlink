import { Message } from '../types/models';

export default function isFirstTimeChatting(messages: Message[]) {
  const hasUserMessage = !!messages.find(m => m.meta.nature === 'Customer');

  return !hasUserMessage && messages.length <= 5;
}
