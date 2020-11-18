import Graph from "comp-sci-maths-lib/dist/dataStructures/graph/Graph"
import { StringGraphVertex } from "comp-sci-maths-lib/dist/types"
import { getStringVertex } from "comp-sci-maths-lib/dist/common"

test("Simple Graph", function(){
    const myGraph: Graph<StringGraphVertex> = new Graph()
    const vertexA = getStringVertex("A")
    const vertexB = getStringVertex("B")
    const vertexC = getStringVertex("C")
    const vertexD = getStringVertex("D")
    const vertexE = getStringVertex("E")
    const vertexF = getStringVertex("F")
    const vertexG = getStringVertex("G")

    myGraph.addBiDirectionalEdge(vertexA, vertexB)
    myGraph.addBiDirectionalEdge(vertexA, vertexC)
    myGraph.addBiDirectionalEdge(vertexB, vertexD)
    myGraph.addBiDirectionalEdge(vertexB, vertexE)
    myGraph.addBiDirectionalEdge(vertexC, vertexD)
    myGraph.addBiDirectionalEdge(vertexD, vertexF)
    myGraph.addBiDirectionalEdge(vertexE, vertexF)
    myGraph.addBiDirectionalEdge(vertexF, vertexG)

    const outFromA = myGraph.getOutgoing(vertexA)
    const outFromAValues = outFromA.map(x => x.to).map(o => o.value)
    expect(outFromAValues.includes("B")).toBeTruthy()

})