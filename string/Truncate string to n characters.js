function truncateString(str, n){
    if(str.length > n){
        return str.slice(0, n) + "...";
    }
    return str;
}

console.log(truncateString("Hello World", 5));