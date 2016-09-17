require('./styles/main.scss');


import InterfaceStore from './js/InterfaceStore';
import AppDispatcher from './js/AppDispatcher';

import selectors from './js/selectors';

const ui = new InterfaceStore();
const dispatcher = new AppDispatcher();

dispatcher.dispatch({type: 'INITIAL_LOAD'});

selectors.imageInput.onchange = (e) => {
  if(!e.target.files[0]) { throw new Error('No file submitted!'); }
  dispatcher.dispatch({
    type: 'SELECT_IMAGE',
    file: e.target.files[0]
  });
};

selectors.startButton.onclick = (e) => {
  dispatcher.dispatch({
    type: 'RENDER_TO_TARGET_CANVAS',
    imageData: ui.targetImage,
    canvas: selectors.targetImageCanvas
  });
};

