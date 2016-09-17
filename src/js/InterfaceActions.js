import AppDispatcher from './AppDispatcher';
import CanvasImage from './CanvasImage';

import selectors from './selectors';

class InterfaceActions {
  constructor(store) {
    this.store = store;
  }

  setup() {
    selectors.startButton.hidden = true;
    selectors.cancelButton.hidden = true;
  }

  selectImage(imageFile) {
    this.store.targetImage = new CanvasImage({
      type: 'file',
      imageFile: imageFile
    });
    selectors.startButton.hidden = false;
  }

  renderToCanvas(fileData, canvas) {
    const ctx = canvas.getContext('2d');
    const reader = new FileReader();
    const image = new Image();

    reader.onload = () => {
      image.src = reader.result;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    reader.readAsDataURL(fileData);
  }
}

export default InterfaceActions;
