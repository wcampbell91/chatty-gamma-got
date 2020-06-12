import moment from 'moment';
import utils from '../helpers/utils';
import messageData from '../helpers/data/messageData';

const messageBuilder = () => {
  const allMessages = messageData.getMessages();
  let domString = '';
  allMessages.forEach((message) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="username">${message.user}</h5>
          <h6 class="timestamp-text mb-2 text-muted">${moment().format('LLL')}</h6>
          <p class="card-text">${message.message}</p>
          <button class="btn btn-danger">delete</button>
        </div>
      </div>
    `;
  });
  utils.printToDom('#messages', domString);
};

export default { messageBuilder };
