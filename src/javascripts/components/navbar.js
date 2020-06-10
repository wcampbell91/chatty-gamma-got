import utils from '../helpers/utils';

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
