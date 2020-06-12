const clearMessage = () => {
  document.querySelector('#messages').innerHTML = '';
  if ($('#messages').text().length <= 0) {
    document.getElementById('clearButton').disabled = true;
  }
};

const clearEvent = () => {
  $('body').on('click', '#clearButton', clearMessage);
};

export default { clearEvent };
