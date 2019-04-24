import { configure, addDecorator } from '@storybook/react';
import { withViewport } from '@storybook/addon-viewport/src/preview';

import '../src/style.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withViewport('pixel'));
configure(loadStories, module);
