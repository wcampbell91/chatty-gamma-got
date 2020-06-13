import '../styles/main.scss';
import navbar from './components/navbar';
import messageBuilder from './components/messageBuilder';
import settings from './components/settings';
import clearMessages from './components/clearMessages';
import events from './components/events';

const init = () => {
  navbar.buildNavbar();
  messageBuilder.messageBuilder();
  settings.buildSettings();
  clearMessages.clearEvent();
  events.clickEvents();
};

init();
