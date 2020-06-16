import navbar from './navbar';

const clickEvents = () => {
  $('body').on('click', '.myRadioButton', (e) => {
    const buttonClass = e.target.closest('.btn');
    $(buttonClass).toggleClass('active');
    $(buttonClass).toggleClass('thisIsSelected');
  });

  $('body').on('click', '#submitMessage', navbar.addMessageEvent);
};

export default { clickEvents };
