import '../styles/main.scss';
import navbar from './components/navbar';
import messageBuilder from './components/messageBuilder';
import settings from './components/settings';
import clearMessages from './components/clearMessages';
import darkMode from './components/darkMode';
import largeText from './components/largeText';

const init = () => {
  navbar.buildNavbar();
  messageBuilder.messageBuilder();
  settings.buildSettings();
  clearMessages.clearEvent();
  darkMode.darkModeEvent();
  largeText.largeTextEvent();
};

init();
