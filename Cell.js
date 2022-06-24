export default class Cell {
    constructor() {
        this.value = "-"
    }

    isEmpty() {
        return this.value === "-"
    }

    setValue(newValue) {
        this.value = newValue
    }

    getValue() {
        return this.value
    }
}