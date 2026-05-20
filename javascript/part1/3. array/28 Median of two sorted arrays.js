function findMedian(nums1, nums2){

    let merged = [];
    let i = 0;
    let j = 0;

    while(i < nums1.length && j < nums2.length){

        if(nums1[i] < nums2[j]){
            merged.push(nums1[i]);
            i++;
        }else{
            merged.push(nums2[j]);
            j++;
        }

    }

    while(i < nums1.length){
        merged.push(nums1[i]);
        i++;
    }

    while(j < nums2.length){
        merged.push(nums2[j]);
        j++;
    }

    let n = merged.length;

    if(n % 2 === 1){
        return merged[Math.floor(n/2)];
    }else{
        return (merged[n/2 - 1] + merged[n/2]) / 2;
    }
}

console.log(findMedian([1,3],[2]));