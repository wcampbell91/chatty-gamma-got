const messages = [
  {
    user: 'johnsnow400',
    message: 'Somebody asked me if I wanted Season 8 on Bluray.  I said I dont want it',
    timestamp: 'WIP',
  },
  {
    user: 'joffreySucks',
    message: 'Seriously, joffery was a punk!',
    timestamp: 'WIP',
  },
  {
    user: 'tyrionRocks111',
    message: 'Burp',
    timestamp: 'WIP',
  },
  {
    user: 'nearlyheadlessned',
    message: 'The show was never the same after Season 6...',
    timestamp: 'WIP',
  },
  {
    user: 'thesebootsweremadeforwhitewalking',
    message: 'That was it?  All those seasons of build up to be stopped by a little gurl?!',
    timestamp: 'WIP',
  },
];

const getMessages = () => messages;

const setMessages = (newMessage) => {
  const tempMessage = newMessage;
  tempMessage.timestamp = 'WIP';
  messages.unshift(tempMessage);
  console.error(messages);
};

export default { getMessages, setMessages };
