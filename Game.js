import Cell from "./Cell.js"

export default class Game {
    constructor() {
        this.reset()
    }

    reset() {
        this.turn = "X"
        this.index = 0
        this.gameState = 0
        this.board = new Array(9).fill(0).map(x => new Cell())
    }

    playAt(tileIndex) {
        if (!this.board[tileIndex].isEmpty()) {
            return
        } else if (this.gameState === 1) {
            return
        }
        
        this.board[tileIndex].setValue(this.turn);
        this.index++;

        if (this.index > 4 && this.isWin()) {
            this.gameState = 1
        } else if (this.turn === "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    isWin() {
        const winsPosition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let theResult = false

        for (let i = 0; i < winsPosition.length && !theResult; i++) {
            theResult = true
            for (let j = 0; j < winsPosition[i].length && theResult; j++) {
                theResult = theResult && this.board[winsPosition[i][j]].getValue() === this.turn
            }

            if (theResult) {
                return winsPosition[i]
            }
        }

        return false
    }
}