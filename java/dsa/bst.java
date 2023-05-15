// Binary search tree
class Bst{
    Node root;
    class Node{
        int data;
        Node left;
        Node right;
        Node(int data){
            this.data=data;
        }
    }
    public Node insert(Node root,int data){
        Node node = new Node(data);
        if(root==null){
            return node;
        }else if(root.data>data){
            root.left=insert(root.left,data);
        }else{
            root.right=insert(root.right,data);
        }
        return root;
    }
    public void preOrder(Node root){
        if(root==null){
            return;
        }
        System.out.println(root.data);
        inOrder(root.left);
        inOrder(root.right);
    }
    public void inOrder(Node root){
        if(root==null){
            return;
        }
        inOrder(root.left);
        System.out.println(root.data);
        inOrder(root.right);
    }
    public void postOrder(Node root){
        if(root==null){
            return;
        }
        inOrder(root.left);
        inOrder(root.right);
        System.out.println(root.data);
    }
    public static void main(String arg[]){
        Bst bst=new Bst();
        Node root=bst.insert(null,5);
        bst.insert(root,3);
        bst.insert(root,1);
        bst.insert(root,9);
        bst.insert(root,2);
        bst.insert(root,7);
        // print bst
        // bst.preOrder(root);
        bst.inOrder(root);
        // bst.postOrder(root);



    }
}