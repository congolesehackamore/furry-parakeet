export default class GameView {
    constructor() {
        
    }

    update(game) {
        this.updateTurn(game)

        const combo = game.isWin()

        for (let i = 0; i < 9; i++) {
            const tile = document.querySelector(".tile[data-index='" + i + "']")

            tile.classList.remove("winner")

            if (game.board[i].value === "X") {
                tile.innerHTML = "<span class=\"player-x\">X</span>"
            } else if (game.board[i].value === "O") {
                tile.innerHTML = "<span class=\"player-o\">O</span>"
            } else {
                tile.innerHTML = ""
            }

            if (combo && combo.includes(i)) {
                tile.classList.add("winner")
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
        let players = [playerX, playerO]

        players.forEach(player => player.classList.remove("active"))

        if (game.turn === "X") {
            playerX.classList.toggle("active")
        } else {
            playerO.classList.toggle("active")
        }
    }
}