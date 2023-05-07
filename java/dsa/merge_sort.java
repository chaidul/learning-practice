class MergeSort{
    public static void devide(int arr[],int l,int r){
        if(l>=r){
            return;
        }
        int mid = l+(r-l)/2;
        devide(arr,l,mid);
        devide(arr,mid+1,r);
        conqure(arr,l,mid,r);
    }
     
    public static void conqure(int arr[],int l,int mid,int r){
        int idx1=l;
        int idx2=mid+1;  
        int merge[]= new int[r-l+1];
        int x=0;
        
        while(idx1<=mid && idx2<=r){
            if(arr[idx1]>=arr[idx2]){
                merge[x++]=arr[idx2++];
            }else{
                merge[x++]=arr[idx1++];
                
            }
        }

        while(idx1<=mid){
            merge[x++]=arr[idx1++];
        }
        while(idx2<=r){
            merge[x++]=arr[idx2++];
        }
        for(int i=0,j=l;i<merge.length;i++,j++){
            arr[j]=merge[i];
        }
        
    }
    public static void main(String arg[]){
        int array[] = {4,2,1,3};
        devide(array,0,array.length-1);
        for(int i=0;i<array.length;i++){
            System.out.println(array[i]);
        }
    }
}