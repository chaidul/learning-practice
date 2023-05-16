import java.util.HashSet;
class FindUniqueNum{
    /* find unique number using bit manipulation in java*/
    public static void getUnique(int arr[]){
        int result=0;
        for(int i=0;i<arr.length;i++){
            result ^=arr[i];
        }
        System.out.print(result);
    }

    public static void uniqueNum(int arr[]){
        HashSet<Integer> set = new HashSet<>();
        for(int i=0;i<arr.length;i++){
            if(!set.contains(arr[i])){
                set.add(arr[i]);
            }else{
                set.remove(arr[i]);
            }
        }
            System.out.print(set);
    }
    public static void main(String arg[]){
        int arr[]={2,2,3,4,3,4,6,7,6};
        // getUnique(arr);
        // uniqueNum(arr);
    }
}