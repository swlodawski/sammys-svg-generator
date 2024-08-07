// Shapes Constructor Object 
class Shape {
    constructor() {
        this.color= ""
    }

    setColor(color) {
        this.color = color;                
    }
}

// Circle Class                                                        
class Circle extends Shape {
    constructor() {
        super();
    }
    render() {
        return`<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
// Square Class
class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`
    }
}
// Triangle Class

class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}
// Exporting Shape Classes
module.exports = {
    Circle, Triangle, Square
}