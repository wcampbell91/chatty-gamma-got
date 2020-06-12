import utils from '../helpers/utils';

const buildSettings = () => {
  const domString = `
  <div class="settings">
    <input type="checkbox" class="largeText"> Large Text</input>
    <input type="checkbox" class="darkTheme"> Dark Mode</input>
  <button id ="clearButton" class="btn btn-danger clearButton">Clear Messages</button>
  </div>
  `;

  utils.printToDom('#settings', domString);
};

export default { buildSettings };
