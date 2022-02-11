/*filter function topic*/
const json_array = [
       {"id":1,"name":"raju"},
       {"id":2,"name":"chaidul"},
       {"id":3,"name":"ajay"},
       {"id":4,"name":"steve jobs"},
       {"id":5,"name":"elon musk"}
 ]
 /*filter function help out all match list */
 const result = json_array.filter(x=>x.id>3);
 console.log(result);
 
