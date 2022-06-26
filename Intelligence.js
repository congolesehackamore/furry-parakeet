export default class Intelligence {
    constructor() {

    }

    makeTurn(board, currentPlayer, otherPlayer) {
        let bestValue = -1000
        let bestMove = 0

        for (let i = 0; i < 9; i++) {
            if (!board[i].isEmpty()) { continue }

            board[i].value = currentPlayer

            let moveValue = this.minimax(board, otherPlayer, currentPlayer, 0, currentPlayer, false)

            board[i].value = "-"

            if (moveValue > bestValue) {
                bestValue = moveValue
                bestMove = i
            }
        }

        return bestMove
    }

    minimax(board, player1, player2, depth, maxPlayer, max) {
        let score = this.evaluate(board)
        if (score === maxPlayer) {
            return 10
        } else if (score === player2 || score == player1) {
            return -10
        } else if (score === 2) {
            return 0
        }

        if (max) {
            let bestScore = -1000
            let testScore = 0

            for (let i = 0; i < 9; i++) {
                if (!board[i].isEmpty()) { continue }

                board[i].value = player1
                testScore = this.minimax(board, player2, player1, depth + 1, maxPlayer, !max)
                board[i].value = "-"

                if (testScore > bestScore) {
                    bestScore = testScore
                }
            }

            return bestScore
        } else {
            let bestScore = 1000
            let testScore = 0

            for (let i = 0; i < 9; i++) {
                if (!board[i].isEmpty()) { continue }

                board[i].value = player1
                testScore = this.minimax(board, player2, player1, depth + 1, maxPlayer, !max)
                board[i].value = "-"

                if (testScore < bestScore) {
                    bestScore = testScore
                }
            }

            return bestScore
        }
    }



    evaluate(board) {
        let winSituations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let isWin = false
        let playerWin = "-"
        for (let i = 0; i < winSituations.length && !isWin; i++) {
            isWin = true
            for (let j = 1; j < winSituations[i].length && isWin; j++) {
                if (!board[winSituations[i][j]].isEmpty() && board[winSituations[i][j]].value === board[winSituations[i][j - 1]].value) {
                    isWin = true
                    playerWin = board[winSituations[i][j]].value
                } else {
                    isWin = false
                }
            }
        }

        if (isWin) {
            return playerWin
        } else {
            let isEmpty = false
            for (let i = 0; i < 9 && !isEmpty; i++) {
                isEmpty = board[i].isEmpty()
            }
            if (!isEmpty) {
                return 2
            }
        }
        return null
    }

}