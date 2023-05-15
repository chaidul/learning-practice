class DoublyLinkedList{
    Node head;
    Node tail;
    int size=0;
    class Node{
        Node prev;
        int data;
        Node next;
        Node(int d){
            this.data = d;
            this.next=null;
            this.prev=null;
        }
    }
    public void add(int d){
        Node node = new Node(d);
        if(head==null){
            head=node;
            tail=node;
            size++;        
        }else{
            node.prev=tail;
            tail.next=node;
            tail=node;
            size++;
        }
    }

    public void insert(int d,int index){
        Node node = new Node(d);
        Node curNode=head;
        for(int i=0;i<size;i++){
            if(i==index-1){
                Node temp = curNode.next;
                node.prev=curNode;
                curNode.next=node;
                node.next=temp;
                node.next.prev=node;
                size++;
            }
            curNode=curNode.next;
        }        
    }
    public void delete(int index){
        Node curNode=head;
        for(int i=0;i<size;i++){
            if(i==index){
                Node temp = curNode.prev;
                curNode.prev.next=curNode.next;
                curNode.next.prev=temp;

                size--;
                // System.out.println(curNode.data);
            }
            curNode=curNode.next;
        }        
    }

    public void print(){
        Node curNode=head;
        for(int i=0;i<size;i++){
            System.out.println(curNode.data);
            curNode=curNode.next;
        }
    }
    public void reverse(){
        Node curNode=tail;
        for(int i=0;i<size;i++){
            System.out.println(curNode.data);
            curNode=curNode.prev;
        }
    }


    public static void main(String arg[]){
        DoublyLinkedList dll=new DoublyLinkedList();
        dll.add(5);
        dll.add(7);
        dll.add(9);
        dll.insert(8,2);
        dll.delete(1);
        dll.print();
        // dll.reverse();

    }
}