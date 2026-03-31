// The square root of n must lie between:  0 ≤ √n ≤ n
//binary search

function sqrt(n){

    let left = 0;
    let right = n;
    let ans = 0;

    while(left <= right){

        let mid = Math.floor((left + right) / 2);

        if(mid * mid === n){
            return mid;
        }

        if(mid * mid < n){
            ans = mid;  //because when mid * mid < n, it means mid is a valid square root candidate.
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return ans;
}

console.log(sqrt(16)); // 4
console.log(sqrt(20)); // 4