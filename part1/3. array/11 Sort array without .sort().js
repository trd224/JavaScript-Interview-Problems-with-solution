// 1️⃣ Bubble Sort (Ascending Order)

const arr = [5, 4, 2, 54, 8, 7, 8, 5];

function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));




// 1️⃣ Selection Sort (Ascending Order)

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort(arr));