import moment from 'moment';
import { Message } from '../../types/models';

type Align = 'left' | 'right';

export type MessageGroupRow =
  | {
      type: 'messages';
      timestamp: string | undefined;
      align: Align;
      messages: Message[];
    }
  | {
      type: 'service_messages';
      messages: Message[];
    };

const isService = (message: Message) =>
  message.content.type === 'service_message';

const isCustomer = (message: Message) => message.meta.nature === 'Customer';

const groupMessages = (
  isTyping: boolean,
  acc: MessageGroupRow[],
  message: Message,
  index: number,
  messages: Message[]
): MessageGroupRow[] => {
  const prevMessage: Message | undefined = messages[index - 1];
  //  const nextMessage: Message | undefined = messages[index + 1];
  const date = moment.utc(message.meta.timestamp);
  const needTimestamp =
    !prevMessage || !moment.utc(prevMessage.meta.timestamp).isSame(date, 'day');
  const isCustomerMessage = isCustomer(message);
  const isServiceMessage = isService(message);
  const lastGroup = acc[acc.length - 1];
  const newGroup =
    !lastGroup ||
    needTimestamp ||
    (prevMessage && isCustomerMessage !== isCustomer(prevMessage)) ||
    (prevMessage && isServiceMessage !== isService(prevMessage));

  if (newGroup) {
    if (isServiceMessage) {
      acc.push({
        type: 'service_messages',
        messages: [message]
      });
    } else {
      const align: Align = isCustomerMessage ? 'right' : 'left';
      const timestamp = needTimestamp
        ? date.calendar(undefined, {
            lastDay: '[Yesterday]',
            sameDay: '[Today]',
            nextDay: 'LL',
            lastWeek: 'LL',
            nextWeek: 'LL',
            sameElse: 'LL'
          })
        : undefined;

      acc.push({
        type: 'messages',
        messages: [message],
        timestamp,
        align
      });
    }
  } else {
    lastGroup.messages.push(message);
  }

  if (isTyping && index === messages.length - 1 && isCustomerMessage) {
    acc.push({
      type: 'messages',
      messages: [],
      timestamp: undefined,
      align: 'left'
    });
  }

  return acc;
};

export default groupMessages;
