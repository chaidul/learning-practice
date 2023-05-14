
class LinkedList{
class Node{ 
        int data;
        Node next;   
        Node(int ele){
            data=ele;
            next=null;
        }        
}
    Node head=null;
    Node tail=null;
    int size=0;
   
    
    public void add(int ele){
        Node node = new Node(ele);
        if(head==null){
            head=node;
            tail=node;
            head.next=tail;
            size++;
        }else{
            tail.next=node;
            tail=node;
            size++;
        }
    }

    public void print(){
        Node curNode=head;
        for(int i=0;i<size;i++){
            System.out.println(curNode.data);
            curNode=curNode.next;

        }

    }
    public void insert(int ele,int index){
        Node node = new Node(ele);
        Node curNode=head;
        for(int i=0;i<size;i++){
            if(i==index-1){
                Node temp = curNode.next;
                curNode.next=node;
                curNode.next.next = temp;
                size++;
            
            }
            curNode=curNode.next;

        }
    }
    public void remove(int index){
        
        Node curNode=head;
        for(int i=0;i<size;i++){
            if(i==index-1){
                Node temp=curNode.next.next;
                curNode.next=temp;
                size--;

                // System.out.println(curNode.data);
            }
            curNode=curNode.next;

        }
    }

    public static void main(String arg[]){
        LinkedList ll = new LinkedList();
        ll.add(2);
        ll.add(3);
        ll.add(5);
        ll.add(7);
        ll.add(8);
        ll.add(100);
        ll.insert(9,5);
        ll.remove(3);
        ll.print();



    }
}