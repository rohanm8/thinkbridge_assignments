//TS047 - Rohan Mane
//Artifact for Clean code - Sorting algorithms

// SORTING ALGORITHMS-----------------------------------------------------------
//Bubble sort
void bubblesort(int arr[], int size)
{
  for(int i=0; i<size; i++) {
    for(int j=0; j<size-i-1; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1]);
      }
    }
  }
}

//Quick sort
int partition (int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low-1);
    
    for(int j=low; j<high-1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap (arr[i+1], arr[high]);
    return (i+1);
}
void quicksort(int arr[], int low, int high) {
    if (low<high) {
        int pi = partition(arr, low, high);
        quicksort(arr, low, pi-1);
        quicksort(arr, pi+1, high);
    }
}

// Selection sort
void selectionsort(int arr[], int size) {
    
    int i, j, min_idx;
    for(i=0; i<size-1; i++) {
        min_idx = i;
        for(j=i+1; j<size; j++) {
            if(arr[j] < arr[min_idx]) min_idx = j;
        }
        if(min_idx != i) swap(&arr[min_idx], &arr[i]);
    }
}