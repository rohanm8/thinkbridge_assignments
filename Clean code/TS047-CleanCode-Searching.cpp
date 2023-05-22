//TS047 - Rohan Mane
//Artifact for Clean code - Searching algorithms

//SEARCHING ALGORITHM----------------------------------------------------------
// Binary search
int binarysearch(int arr[], int left_half, int right_half, int x) {
    
    while(left_half <= right_half) {
        int middle = left_half + (right_half - left_half) / 2;
        
        //Check if x is present in middle
        if(arr[middle] == x) return middle;
        
        //If x is greater than middle, ignore left half
        if(arr[middle] < x) left_half = middle + 1;
        
        //If x is smaller than middle, ignore right half
        if(arr[middle] > x) right_half = middle - 1;
    }
    return -1;
}