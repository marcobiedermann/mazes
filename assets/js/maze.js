class Maze {
  constructor(element, options) {
    const defaults = {
      width: 400,
      height: 400,
    };

    this.element = element;
    this.options = {
      ...defaults,
      ...options,
    };

    this.init();
  }

  init() {
    const { element, options } = this;

    this.context = element.getContext('2d');

    this.element.width = options.width;
    this.element.height = options.height;
  }
}

export default Maze;
