import java.util.*;
class Condition{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age : ");
        int age =  sc.nextInt();
        // if(age>35){
        //     System.out.println("older");
        // }else if(age>18){
        //     System.out.println("Younger");
        // }else{
        //     System.out.println("Adult");
        // }
        switch(age){
            case 18:{
                System.out.println("Younger");
                break;
            }
            case 35:{
                System.out.println("Older");
                break;
            }
            default : {
                System.out.println("not allow");
            }
        }
        
        
    }
}