const darkModeCheckBox = () => {
  if (document.getElementById('darkTheme').checked === true) {
    document.getElementById('page').classList.add('darkMode');
  } else {
    document.getElementById('page').classList.remove('darkMode');
  }
};

const darkModeChecked = () => {
  $('#darkTheme').click(darkModeCheckBox);
};

export default { darkModeChecked, darkModeCheckBox };
