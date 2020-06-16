const darkModeCheckBox = () => {
  if (document.getElementById('darkMode').checked === true) {
    document.getElementById('page').classList.add('darkMode');
  } else {
    document.getElementById('page').classList.remove('darkMode');
  }
};

const darkModeEvent = () => {
  $('#darkMode').click(darkModeCheckBox);
};

export default { darkModeEvent, darkModeCheckBox };
