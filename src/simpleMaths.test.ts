import { calcAreaSquare, calcAreaTriangle,circeOnEdge } from './simpleMaths'

    test('Area Square', () => {
        expect(calcAreaSquare(4)).toBe(16);
    })

    test('Area Triangle', () => {
        expect(calcAreaTriangle(4, 5)).toBe(10);
    })

    test('Circle Test', () => {
        expect(circeOnEdge(3, 2,0,1,0)).toBe(true);
        expect(circeOnEdge(3, 3,0,0,0)).toBe(true);
    })
// export default texts