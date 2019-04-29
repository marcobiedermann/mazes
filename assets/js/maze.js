class Maze {
  constructor(element, options) {
    const defaults = {
      width: 300,
      height: 300,
      tileSize: 20,
    };

    this.element = element;
    this.options = {
      ...defaults,
      ...options,
    };

    this.cells = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    ]

    this.init();
  }

  init() {
    const { element, options } = this;

    this.context = element.getContext('2d');

    this.element.width = options.width;
    this.element.height = options.height;
  }

  render() {
    const { context, cells, options } = this;

    const rows = cells.length;

    for(let i = 0; i < rows; i += 1) {
      const cols = cells[i].length;

      for(let j = 0; j < cols; j += 1) {
        const cell = cells[i][j];

        context.fillStyle = cell ? '#fff' : '#000';
        context.fillRect(j * options.tileSize, i * options.tileSize, options.tileSize, options.tileSize);
      }
    }
  }
}

export default Maze;
