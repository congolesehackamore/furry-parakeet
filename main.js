import GameView from "./GameView.js"
import Game from "./Game.js"

const game = new Game()
const gameView = new GameView()

const onRestartClick = function() {
    game.reset()
    gameView.update(game)
}

const onTileClick = function(tileIndex) {
    game.playAt(tileIndex)
    gameView.update(game)
}

document.querySelector(".restart-btn").addEventListener("mouseup", function() {
    onRestartClick()
})

document.querySelectorAll(".tile").forEach(function(tile) {
    tile.addEventListener("mouseup", function() {
        onTileClick(tile.dataset.index)
    })
})