// selection sort in java
class SelectionSort{
    public static void approce1(int arr[]){
        for(int i=0;i<arr.length-1;i++){
            int smallest = i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[smallest]>arr[j]){
                    smallest=j;
                }
            }
            int temp = arr[i];
            arr[i]=arr[smallest];
            arr[smallest]=temp;
        }
        // print array
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
    public static void main(String arg[]){
        int[] array ={2,3,1,6,4,5};
        approce1(array);
    }
}