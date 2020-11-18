import { getStringVertex } from "comp-sci-maths-lib/dist/common";
import * as winston from "winston";
import {depthFirstSearch, SimpleStringGraph } from 'comp-sci-maths-lib/dist'
// import tests from './simpleMaths.test'

// tests()

const simpleLogger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

function sayHello(name: string): void {
    simpleLogger.info(`Hello ${name}`)
}

sayHello('Mr Sharp')
const myGraph = new SimpleStringGraph()
myGraph.addLink("A","B")



const dfs: string[] = []
depthFirstSearch(myGraph,
    getStringVertex('A'),
    x => dfs.push(x.value));

simpleLogger.info(dfs)