// left  = [2,4,5,54]
//          ↑
//          i

// right = [5,7,8,8]
//          ↑
//          j

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {

    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }

    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [5,4,2,54,8,7,8,5];

console.log(mergeSort(arr));