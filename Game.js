export default class Game {
    constructor() {
        console.log("Start Game")
        this.turn = "X"
        this.index = 0
        this.board = new Array(9).fill(null)
        console.log(this.board)
    }

    nextTurn() {
        this.index++

        if (this.turn === "X")
            this.turn = "O"
        else
            this.turn = "X"
    }

    makeMove(index) {
        if (this.board[index])
            return
        if (this.endOfGame())
            return

        this.board[index] = this.turn

        const winningCombo = this.findWinningCombos()
        console.log("Do We Have A Winner? " + winningCombo)

        if (!winningCombo) {
            this.nextTurn()
        }
    }

    findWinningCombos() {
        const combos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            /**/
            [0,3,6],
            [1,4,7],
            [2,5,8],
            /**/
            [0,4,8],
            [2,4,6]
        ]

        for (const combo of combos) {
            let winning = true

            for (const index of combo)
                winning = winning && this.board[index] === this.turn

            if (winning)
                return combo
        }

        return null
    }

    endOfGame() {
        return !!this.findWinningCombos()
    }
}