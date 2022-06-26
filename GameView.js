export default class GameView {
    constructor() {
        
    }

    update(game) {
        const combo = game.isWin(game.turn)
        
        this.updateTurn(game, !!combo)

        for (let i = 0; i < 9; i++) {
            const tile = document.querySelector(".tile[data-index='" + i + "']")

            tile.classList.remove("winner")
            tile.classList.remove("selected")

            if (game.board[i].value === "X") {
                tile.innerHTML = "<span class=\"player-x\">X</span>"
            } else if (game.board[i].value === "O") {
                tile.innerHTML = "<span class=\"player-o\">O</span>"
            } else {
                tile.innerHTML = ""
            }

            if (combo && combo.includes(i)) {
                tile.classList.add("winner")
            } else if(i === game.cellIndex) {
                tile.classList.add("selected")
            }
        }
    }

    updateTurn(game, turnWin) {
        let playerX = document.querySelector(".header .player-x")
        let playerO = document.querySelector(".header .player-o")
        let players = [playerX, playerO]

        players.forEach(player => player.classList.remove("active"))

        if (game.turn === "X") {
            playerX.classList.toggle("active")
        } else {
            playerO.classList.toggle("active")
        }

        let aboutPlayerX = "Player X"
        if (turnWin && game.turn === "X") {
            aboutPlayerX = "🏆 " + aboutPlayerX
        }
        if (game.players[0] === "computer") {
            aboutPlayerX = aboutPlayerX + " 🖥️"
        } else if (game.players[0] === "human") {
            aboutPlayerX = aboutPlayerX + " 🧑"
        }

        let aboutPlayerO = "Player O"
        if (turnWin && game.turn === "O") {
            aboutPlayerO = "🏆 " + aboutPlayerO
        }
        if (game.players[1] === "computer") {
            aboutPlayerO = aboutPlayerO + " 🖥️"
        } else if (game.players[1] === "human") {
            aboutPlayerO = aboutPlayerO + " 🧑"
        }

        document.querySelector(".header .player-o span").innerHTML = aboutPlayerO
        document.querySelector(".header .player-x span").innerHTML = aboutPlayerX
    }
}