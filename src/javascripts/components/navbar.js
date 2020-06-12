import utils from '../helpers/utils';
import './navbar.scss';

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
                    <input type="radio" name="options" id="user1" checked> johnsnow420
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
                  <input type="message" class="form-control" id="inputForm" aria-describedby="emailHelp" placeholder="Type Message Here">
                </div>
                <div class="col">
                  <button type="submit" class="btn btn-primary float-right" id="sendButton">Send</button>
                </div>
              </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
  `;

  utils.printToDom('#navbar', domString);
};

export default { buildNavbar };
