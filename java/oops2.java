// interface User{
//     public void info(String name);
// }

// class Manager implements User{
//     String name;
//     public void info(String name){
//         this.name=name;
//     }
//     public void getInfo(){
//         System.out.println(this.name);
//     }
// }
abstract class Product{
    abstract public void detaile(String name);
}
class Developer extends Product{
    public void detaile(String name){
        // System.out.println(name,price);
        System.out.println("(abstract class)\n"+name);
    }
}
class Oops2{
    public static void main(String arg[]){
        // Manager manager = new Manager();
        // manager.info("chaidul");
        // manager.getInfo();
        Developer dev = new Developer();
        dev.detaile("Google");

    }
}