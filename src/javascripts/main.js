import '../styles/main.scss';
import navbar from './components/navbar';
import messageBuilder from './components/messageBuilder';
import settings from './components/settings';

const init = () => {
  navbar.buildNavbar();
  messageBuilder.messageBuilder();
  settings.buildSettings();
};

init();
