const largeTextCheckBox = () => {
  if (document.getElementById('largeText').checked === true) {
    $('.message').addClass('lrgTxt');
  } else {
    $('.message').removeClass('lrgTxt');
  }
};

const largeTextEvent = () => {
  $('#largeText').click(largeTextCheckBox);
};

export default { largeTextEvent };
