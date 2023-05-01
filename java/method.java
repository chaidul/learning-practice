class Method{
    public static void Number(){
        System.out.println(123);
        return;
    }

    public static int Sum(int a,int b){
        System.out.print(a+b);
        return a+b;
    }
    public static String name(String name){
        return name;
    }
    public static void main(String arg[]){
        // Number();
        // Sum(2,3);
        System.out.print(name("Raju"));
        
    }
}