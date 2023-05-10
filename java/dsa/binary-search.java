class BinarySearch{
    public static int Search(int arr[],int l,int r,int t){
        int mid = l+(r-l)/2;
        if(arr[mid]==t){
            // return mid;
            System.out.print(mid);
        }else if(arr[mid]>t){
            Search(arr,l,mid-1,t);
        }else{
            Search(arr,mid+1,r,t);
        }
        return -1;
    }
    public static void main(String arg[]){
        int array[] = {1,2,4,5,6,7,8};
        Search(array,0,array.length-1,7);
    }
}