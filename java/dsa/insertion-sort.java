class InsertionSort{
    // approch 1
    public static void apporoce1(int arr[]){
        for(int i=1;i<arr.length;i++){
            int temp=arr[i];
            int j = i-1;
            while(j>=0 && arr[j]>temp){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=temp;
           
        }

        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
    public static void main(String arg[]){
        int arr[]={3,2,1};
        apporoce1(arr);
    }
}