import { configure } from '@storybook/react';

import '../src/style.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.jsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
