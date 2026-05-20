function trap(bars){

    let left = 0;
    let right = bars.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let water = 0;

    while(left < right){

        if(bars[left] < bars[right]){

            if(bars[left] >= leftMax){
                leftMax = bars[left];
            }else{
                water += leftMax - bars[left];
            }

            left++;

        }else{

            if(bars[right] >= rightMax){
                rightMax = bars[right];
            }else{
                water += rightMax - bars[right];
            }

            right--;
        }
    }

    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));