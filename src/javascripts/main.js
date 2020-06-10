import '../styles/main.scss';
import navbar from './components/navbar';
import messageBuilder from './components/messageBuilder';

const init = () => {
  navbar.buildNavbar();
  messageBuilder.messageBuilder();
};

init();
