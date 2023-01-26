/*
Graph adjacency List implementetion using javascript

*/
class Queue{
    constructor(){
        this.arr = []
        this.size = 0
    }

    //add data in Rear of  queue
    enqueue(data){
        this.arr.push(data)
        this.size++
        return true
    }

    //remove data in font of queue
    dequeue(){
        var peek = this.arr[0]
        this.arr = this.arr.slice(1)
        this.size--
        return peek
    }

    //display font
    isEmpty(){
		return this.size == 0
		//return this.arr
    }
}
class Graph {

    constructor(noOfVertices)

    {

        this.noOfVertices = noOfVertices;

        this.AdjList = new Map();

    }
 


addVertex(v)
{
    this.AdjList.set(v, []);
}

addEdge(v, w)
{
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
}

printGraph()
{
    var get_keys = this.AdjList.keys();
	//console.log(this.AdjList.get("A"))
    for (var i of get_keys) 
{
        var get_values = this.AdjList.get(i);

        var conc = "";

        for (var j of get_values)

            conc += j + " ";
 
        console.log(i + " -> " + conc);

    }
}


bfs(startingNode="A"){
	var visited = {};
	var q = new Queue;
	visited[startingNode]=true
	q.enqueue(startingNode)

	while(!q.isEmpty()){
		var getQueueEle = q.dequeue()
		console.log(getQueueEle)
		var get_List = this.AdjList.get(getQueueEle);
		for(var i in get_List){
			var neigh = get_List[i];		
		    if (!visited[neigh]) {		
		   		visited[neigh] = true;		
		    	q.enqueue(neigh);
				
			}
		
		}

	}
	
}

}

var g = new Graph(6);

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices

for (var i = 0; i < vertices.length; i++) {

    g.addVertex(vertices[i]);
}
 
// adding edges

g.addEdge('A', 'B');

g.addEdge('A', 'D');

g.addEdge('A', 'E');

g.addEdge('B', 'C');

g.addEdge('D', 'E');

g.addEdge('E', 'F');

g.addEdge('E', 'C');

g.addEdge('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
//g.printGraph();
g.bfs()
