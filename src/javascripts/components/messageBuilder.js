import utils from '../helpers/utils';
import messageData from '../helpers/data/messageData';

const messageBuilder = () => {
  const allMessages = messageData.getMessages();
  let domString = '';
  allMessages.forEach((message) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${message.user}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${message.timestamp}</h6>
        <p class="card-text">${message.message}</p>
        <button class="btn btn-danger">delete</button>
      </div>
    </div>
    `;
  });
  utils.printToDom('#messages', domString);
};

export default { messageBuilder };
