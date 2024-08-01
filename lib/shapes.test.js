// Destructuring Shape Constructor Object
const {Cirle, Triangle, Square} = require('./shapes');
// Circle Test
describe ('Circle', () => {
    it('Should render a circle ', () => {
        const shape = newCircle();
        shape.setcolor('green');
        expect(shape.render()).toEqual(`<circle cx="50" y="0" width="200" height="200" fill="green"/>`)
    });
});
// Square Test
describe ('Square', () => {
    it('Should render a square ', () => {
        const shape = newSquare();
        shape.setcolor('red');
        expect(shape.render()).toEqual(`<rect cx="50" y="0" width="200" height="200" fill="red"/>`)
    });
});
// Triangle Test
describe ('Triangle', () => {
    it('Should render a triangle ', () => {
        const shape = newTriangle();
        shape.setcolor('blue');
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`)
    });
});