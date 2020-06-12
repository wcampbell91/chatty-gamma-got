const messages = [
  {
    user: 'johnsnow420',
    message: 'Somebody asked me if I wanted Season 8 on Bluray.  I said I dont want it',
    timestamp: 'WIP',
  },
  {
    user: 'joffreySucks',
    message: 'Seriously, joffery was a punk!',
    timestamp: 'WIP',
  },
  {
    user: 'tyrionRocks69',
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
  messages.unshift({ user: '', message: newMessage, timestamp: 'WIP' });
};

export default { getMessages, setMessages };
