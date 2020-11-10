export function calcAreaSquare(sideLength: number): number {
    return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
    return width * height / 2;
}
export function circeOnEdge(radius: number, centerX: number, centerY:number, pointX: number, pointY:number): boolean {
    return ((pointX+centerX)^2)+((pointY+centerY)^2)===radius
}

