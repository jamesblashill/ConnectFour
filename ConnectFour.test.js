const { ConnectFour, CellValue } = require("./ConnectFour");

describe("ConnectFour", () => {
  test("Can create new game engine", () => {
    const game = new ConnectFour();
    expect(game.numRows).toBe(6);
    expect(game.numColumns).toBe(7);
    expect(game.board).toHaveLength(6);
    expect(game.toString()).toEqual(
      "0 0 0 0 0 0 0\n0 0 0 0 0 0 0\n0 0 0 0 0 0 0\n0 0 0 0 0 0 0\n0 0 0 0 0 0 0\n0 0 0 0 0 0 0"
    );
  });

  test("Can play move", () => {
    const game = new ConnectFour();
    expect(game.getCell(0, 0)).toBe(0);
    game.playMove(0, 1);
    expect(game.getCell(0, 0)).toBe(1);
  });

  test("Can win horizonally", () => {
    const game = new ConnectFour();
    expect(game.getWinner()).toBeUndefined();
    game.playMove(0, 1);
    expect(game.getWinner()).toBeUndefined();
    game.playMove(1, 1);
    expect(game.getWinner()).toBeUndefined();
    game.playMove(2, 1);
    expect(game.getWinner()).toBeUndefined();
    game.playMove(3, 1);
    expect(game.getWinner()).toBe(1);
  });

  test("Can win vertically", () => {
    const game = new ConnectFour();
    expect(game.getWinner()).toBeUndefined();
    game.playMove(0, 2);
    expect(game.getWinner()).toBeUndefined();
    game.playMove(0, 2);
    expect(game.getWinner()).toBeUndefined();
    game.playMove(0, 2);
    expect(game.getWinner()).toBeUndefined();
    game.playMove(0, 2);
    expect(game.getWinner()).toBe(2);
  });
});
