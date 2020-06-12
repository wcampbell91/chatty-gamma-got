import utils from '../helpers/utils';
import './navbar.scss';
import messageData from '../helpers/data/messageData';
import messageBuilder from './messageBuilder';


const buildNavbar = () => {
  const domString = `
  <div class="row>
    <div class="col-12">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <i class="fa-lg fas fa-shield-alt"></i>
          GOT
        </a>
        <div class="col-10">
          <form>
              <div class="form-row align-items-center">
                <div class="col-10">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                      <input type="radio" name="options" id=""> johnsnow420
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="user2"> joffreySucks
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="user3"> tyrionRocks69
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="user4"> nearlyheadlessned
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="user5"> thesebootsweremadeforwhitewalking
                    </label>
                  </div>
                  <input type="text" class="form-control inputField" id="inputForm" aria-describedby="emailHelp" placeholder="Type Message Here">
                  <button id="submitMessage" type="submit" style="display: none"></button>
                </div>
                <div class="col">
                </div>
              </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
  `;

  $('#inputForm').on('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      $('#submitMessage').click();
    }
    return false;
  });

  utils.printToDom('#navbar', domString);
};


const addMessageEvent = (e) => {
  e.preventDefault(e);
  console.error(e);
  const newMessage = e.target.previousElementSibling.value;

  messageData.setMessages(newMessage);

  buildNavbar();
  messageBuilder.messageBuilder();
};


$('body').on('click', '#submitMessage', addMessageEvent);


export default { buildNavbar };
