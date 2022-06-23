import GameView from "./GameView"
import Game from "./Game"

const game = Game()
const gameView = GameView()

document.querySelector(".restart-btn").addEventListener("mouseup", function() {
    console.log("mouseup on button")
})