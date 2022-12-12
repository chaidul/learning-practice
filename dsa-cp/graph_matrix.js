/*
Graph adjacency Matrix using javascript
*/

class Graph{
	constructor(){
		this.matrix = [
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0],
		[0,0,0,0,0,0]]
	}

	addEdge(source,dest){
		this.matrix[source][dest]=dest
		this.matrix[dest][source]=source
	}
	printGraph(){
		console.log(this.matrix)
	}
}

var graph = new Graph;

graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(1,5)
graph.addEdge(2,3)
graph.addEdge(3,2)
graph.addEdge(3,5)
graph.addEdge(5,1)
graph.addEdge(5,4)


graph.printGraph()
