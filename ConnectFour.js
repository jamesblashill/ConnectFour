class ConnectFour {
  constructor() {
    this.numRows = 6;
    this.numColumns = 7;
    this.board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  }

  getCell(row, column) {
    return this.board[row][column];
  }

  setCell(row, column, player) {
    this.board[row][column] = player;
  }

  playMove(column, player) {
    if (player < 0 || player > 2) {
      throw "Invalid player";
    }
    // TODO: Implement
  }

  getWinner() {
    // TODO: Implement
  }

  toString() {
    return this.board.map(row => row.join(" ")).join("\n");
  }
}

const CellValue = {
  Empty: 0,
  Player1: 1,
  Player2: 2
};

module.exports = { ConnectFour, CellValue };
