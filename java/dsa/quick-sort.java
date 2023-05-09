class QuickSort{
    public static int partision(int arr[],int l,int r){
        int pivot = arr[r];
        int i=l-1;
        for(int j=l;j<r;j++){
            if(arr[j]<pivot){
                i++;
                int temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        i++;
        int temp=arr[i];
        arr[i]=pivot;
        arr[r]=temp;
        return i;
        
    }
    public static void sort(int arr[],int l,int r){
        if(l<r){
            int pidx = partision(arr,l,r);
            sort(arr,l,pidx-1);
            sort(arr,pidx+1,r);
        }
    }
    public static void main(String arg[]){
        int[] array = {5,2,6,4,1,3};
        sort(array,0,array.length-1);
        for(int i=0;i<array.length;i++){
            System.out.println(array[i]);
        }
    }
}