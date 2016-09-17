import Store from './Store';
import InterfaceActions from './InterfaceActions';

import selectors from './selectors';

class InterfaceStore extends Store {
  constructor() {
    super();

    this.actions = new InterfaceActions(this);

    this.addListener((payload) => {
      switch(payload.type) {
        case 'INITIAL_LOAD':
          this.actions.setup();
          break;
        case 'SELECT_IMAGE':
          this.actions.selectImage(payload.file);
          break;
        case 'RENDER_TO_TARGET_CANVAS':
          this.actions.renderToCanvas(
            payload.imageData.imageFile,
            selectors.targetImageCanvas
          );
          break;
        case 'RENDER_TO_GENERATED_CANVAS':
          this.actions.renderToCanvas(
            payload.imageData.imageFile,
            selectors.algorithmImageCanvas
          );
          break;
      }
    });
  }
}

export default InterfaceStore;
