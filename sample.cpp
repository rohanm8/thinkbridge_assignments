#include <iostream>
#include <bits/stdc++.h>
//Error with line 2
using namespace std;

// Print array
void print_array(int arr[], int size) {
    for(int i=0; i<size; i++) {
        if(i==size-1) std::cout << arr[i];
        else std::cout << arr[i] << ", ";
    }
}

/*
// Print array (Passing one less parameter)
void print_arr(int arr[]) {
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i=0; i<n; i++) {
        if(i==n-1) std::cout << arr[i];
        else std::cout << arr[i] << ", ";
    }
}
*/

// Swap elements
void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

//SEARCHING ALGORITHMS----------------------------------------------------------
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

//Driver code
int main() {
    int choice, size, arr[size];
    std::cout << "Array size: ";
    std::cin >> size;
    for(int i=0; i<size; i++) {
        std::cout << "Enter element " << i << ": ";
        std::cin >> arr[i];
    }
    
    //GUI selector
    std::cout <<"\nSelect choice:";
    std::cout << "\n1. Bubble sort";
    std::cout << "\n2. Quick sort";
    std::cout << "\n3. Selection sort";
    std::cout << "\n4. Binary search";
    std::cout << "\nChoice: ";
    std::cin >> choice;
    
    switch(choice) {
        case 1: bubblesort(arr, size);
        break;
        case 2: quicksort(arr, 0, size-1);
        break;
        case 3: selectionsort(arr, size);
        break;
        /*
        case 4: 
        int result = binarysearch(arr, 0, size-1, x);
        (result == -1)
            ? cout << "Element is not present in array"
            : cout << "Element is present at index " << result;
        break;
        */
        default: std::cout << "Please enter choice.";
        break;
    }
    
    print_array(arr, size);
    //print_arr(arr);
}