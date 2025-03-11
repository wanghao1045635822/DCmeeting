// 接口
interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
    layout?: unknown;
}

function area(shape : Shape) {
    let area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

export  {area};

console.log( area( {name: "rectangle", width: '30', height: '15'} ) );
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );










