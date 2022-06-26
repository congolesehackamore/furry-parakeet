import Cell from "./Cell.js"

export default class Game {
    constructor() {
        this.reset()
    }

    reset() {
        this.turn = "X"
        this.turns = 0
        this.gameState = 0
        this.cellIndex = 9;
        this.board = new Array(9).fill(0).map(x => new Cell())
    }

    playAt(tileIndex) {
        if (!this.board[tileIndex].isEmpty()) {
            return
        } else if (this.gameState === 1) {
            return
        }
        
        this.board[tileIndex].setValue(this.turn);
        this.turns++;

        if (this.turns > 4 && this.isWin()) {
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

    moveAt(type) {
        if (type === "up") {
            if (this.cellIndex === 9) { return }
            else if ((this.cellIndex - this.cellIndex % 3) / 3 === 0) { return }
            else {
                this.cellIndex = this.cellIndex - 3
            }
        } else if (type === "down") {
            if (this.cellIndex === 9) { this.cellIndex = 0 }
            else if ((this.cellIndex - this.cellIndex % 3) / 3 === 2) { return }
            else {
                this.cellIndex = this.cellIndex + 3
            }
        } else if (type === "right") {
            if (this.cellIndex === 9) { this.cellIndex = 0 }
            else if (this.cellIndex % 3 === 2) { return }
            else {
                this.cellIndex = this.cellIndex + 1
            }

        } else if (type === "left") {
            if (this.cellIndex === 9) { return }
            else if (this.cellIndex % 3 === 0) { return }
            else {
                this.cellIndex = this.cellIndex - 1
            }
        }
    }
}