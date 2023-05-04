class Student{
    String name;
    Student(){
        // System.out.println("hello constructor");
    }
    public void getStudent(){
        System.out.println(this.name);

    }
    public int addNum(int a,int b){
        return a+b;
    }
    // polymorphism
    public int addNum(int a,int b,int c){
        return a+b+c;
    }
    // private method not access from outside
    private void address(String name,int pin){
        System.out.println(name+"\n"+pin);
    }
    // abstract method
    int pin;
    
}
class Collage extends Student{
    public void teacher(){
        this.name="chaidul";
        this.pin=781329;
        
    }
    public void getTeacher(){
        System.out.println(this.name+"\n"+this.pin);
    }
}
class Oops{
    public static void main(String arg[]){
        Student stu = new Student();
        // stu.name="chaidul";
        // stu.getStudent();
        // System.out.println(stu.addNum(5,7));
        // System.out.println(stu.addNum(5,7,3));
        // stu.address("raju",781329);
        Collage clg = new Collage();
        clg.teacher();
        clg.getTeacher();

        
    }
}
