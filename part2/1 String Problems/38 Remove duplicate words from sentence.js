//Remove duplicate words from sentence

let str = "hello world hello chatgpt world";

function removeDuplicateWords(str){
    const words = str.slipt(" ");
    const uniqueWords = [...new Set(words)];
    console.log(uniqueWords);
}

console.log(removeDuplicateWords(str));