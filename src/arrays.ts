import { simpleLogger } from "comp-sci-maths-lib/dist/common";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

simpleLogger.info('Hello Arrays')
const rowLength = 6
const colomnLength = 6

const myGrid: string[][] = [];

for (let row=0;row<rowLength;row++){
    myGrid[row] = []
    for (let colomn=0;colomn<colomnLength;colomn++){
        myGrid[row][colomn] = 'X'
    }
}
let rows = 0
let colomns = 0

myGrid[0][0] = 'O'
console.log(myGrid)
let count = 0

setInterval(function move(){
    count++
},500)

process.stdin.on('keypress', (answer) => {
    console.clear()
  myGrid[rows][colomns] = 'X'

  if(answer === 's' && rows < (rowLength - 1)){
      rows++
  }else if(answer === 'w' && rows > 0){
      rows--
  }else if(answer === 'a' && colomns > 0){
      colomns--
  }else if(answer === 'd' && colomns < (colomnLength - 1)){
      colomns++
  }
  myGrid[rows][colomns] = 'O'
  console.log(myGrid)
});