function Circle ({radius, location}) {
    return {
        draw() {
            console.log(`draw circle with radius ${radius} and locations ${location}`)
        }
    }
}

// Factory Function
function createCircle(radius, location) {
    return new Circle({radius, location});
}

const circle1 = new createCircle(1, '235');
console.log(circle1);
circle1.draw()

const circle2 = new createCircle(2, '123');
circle2.draw()
