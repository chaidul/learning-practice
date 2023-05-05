class BubbleSort{
    // brute forch apporoce
    public static void approce1(int arr[]){
        int n = arr.length;
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i-1;j++){
                 if(arr[j]>arr[j+1]){
                    arr[j]=arr[j]^arr[j+1];
                    arr[j+1]=arr[j]^arr[j+1];
                    arr[j]=arr[j]^arr[j+1];
                 }
            }           
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);

        }
    }
// recursion approce in bubble sort
    public static int isSort(int array[]){
        for(int i=0;i<array.length-1;i++){
            if(array[i] > array[i+1]){
                return 0;
            }
        }
        return 1;
    }
    static int l = 0;
    public static void apporoce2(int arr[]){
        if(isSort(arr) == 1){
            for(int i=0;i<arr.length;i++){
                System.out.println(arr[i]);
            }
        }
        
        else if(arr[l]>arr[l+1]){
            arr[l]=arr[l]^arr[l+1];
            arr[l+1]=arr[l]^arr[l+1];
            arr[l]=arr[l]^arr[l+1];
            l=0;
            apporoce2(arr);
        }else{
            l++;
            apporoce2(arr);
        }
    }
    public static void main(String arg[]){
        int[] array = {3,2,1};
        // approce1(array);
        // apporoce2(array);

    }
}