function threeSum(arr, k){

    for(let i = 0; i < arr.length - 2; i++){

        let left = i + 1;
        let right = arr.length - 1;

        while(left < right){

            let sum = arr[i] + arr[left] + arr[right];

            if(sum === k){
                return [i, left, right];
            }
            else if(sum > k){
                right--;
            }
            else{
                left++;
            }

        }
    }

    return [];
}

console.log(threeSum([1,2,3,4,5], 9));