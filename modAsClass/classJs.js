class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

// 표현식
const Circle = class {
    constructor(radius) {
        this.radius = radius
    }
}

const r = new Rectangle(10, 10);
const c = new Circle(5);
console.log(r);
console.log(c);

// static
class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // static property
    static typeName='Rectangle';
    // static method
    static info() {
        return `Type: ${Rectangle2.typeName}`;
    }
    // instance method
    getArea() {
        return this.width * this.height;
    }
}

const r2 = new Rectangle2(10, 10);
console.log(r2.getArea());
console.log(Rectangle2.typeName);
console.log(Rectangle2.info());

// 상속
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Position3D extends Position {
    constructor(x, y, z) {
        super(x, y)
        this.z = z
    }
}

const p3 = new Position3D(0, 0, 0);
console.log(p3)

function Position2(x, y) {
    this.x = x;
    this.y = y;
}

class Position3D2 extends Position2 {
    constructor(x, y, z) {
        super(x, y)
        this.z = z
    }
}

const p32 = new Position3D2(0, 0, 0);
console.log(p32)