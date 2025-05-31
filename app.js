import Game, {
    GameSavingData as loadGame,
    readGameSaving as saveGame,
    writeGameSaving
} from './game.js';

const game = new Game();
game.start();