// Shapes Constructor Object 

class Shape {
    constructor() {
        this.color= ''
    }

    setColor(color) {
        this.color = color                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }
}

// Cirle Class                                                                                                       000000000000000000000000000000000000000000

class Cirle extends Shape() {
    constructor() {
        super();
    }
    render() {
        return`<fill='${this.color}'/>`
    }
}
// Cirle Square

class Square extends Shape() {
    constructor() {
        super();
    }
    render() {
        return`<fill='${this.color}'/>`
    }
}
// Triangle Class

class Triangle extends Shape() {
    constructor() {
        super();
    }
    render() {
        return`<fill='${this.color}'/>`
    }
}
// Exporting Shape Classes
module.exports = {
    Cirle, Triangle, Square
}