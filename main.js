import GameView from "./GameView.js"
import Game from "./Game.js"

const game = new Game()
const gameView = new GameView()

const onRestartClick = function() {
    game.reset()
    gameView.update(game)
}

const onTileClick = function(tileIndex) {
    game.playAt(tileIndex, false)
    gameView.update(game)
}

document.querySelector("#restart.active").addEventListener("mouseup", function() {
    onRestartClick()
})

document.querySelectorAll(".tile").forEach(function(tile) {
    tile.addEventListener("mouseup", function() {
        onTileClick(tile.dataset.index)
    })
})

document.addEventListener("keyup", function(event) {
    switch (event.code) {
        case "ArrowDown":
            game.moveAt("down")
            gameView.update(game)
            break
        case "ArrowUp":
            game.moveAt("up")
            gameView.update(game)
            break
        case "ArrowRight":
            game.moveAt("right")
            gameView.update(game)
            break
        case "ArrowLeft":
            game.moveAt("left")
            gameView.update(game)
            break
        case "Space":
        case "Enter":
            if (game.cellIndex === 9) { return }
            game.playAt(game.cellIndex)
            gameView.update(game)
            break;
        case "KeyR":
            onRestartClick();
            break;
    }
})

document.querySelector("#computer-vs-computer.active")?.addEventListener("mouseup", function() {
    console.log("🖥️ vs 🖥️")
    game.reset()
    game.setPlayers("computer", "computer")
    gameView.update(game)
})

document.querySelector("#computer-vs-player.active")?.addEventListener("mouseup", function() {
    console.log("🖥️ vs 🧑")
    game.reset()
    game.setPlayers("computer", "human")
    gameView.update(game)
})

document.querySelector("#player-vs-computer.active")?.addEventListener("mouseup", function() {
    console.log("🧑 vs 🖥️")
    game.reset()
    game.setPlayers("human", "computer")
    gameView.update(game)
})

document.querySelector("#player-vs-player.active")?.addEventListener("mouseup", function() {
    console.log("🧑 vs 🧑")
    game.reset()
    game.setPlayers("human", "human")
    gameView.update(game)
})