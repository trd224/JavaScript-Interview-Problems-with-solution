function majorityElement(arr){

    const map = {};
    const n = arr.length;

    for(let num of arr){
        map[num] = (map[num] || 0) + 1;

        if(map[num] > n/2){
            return num;
        }
    }
}