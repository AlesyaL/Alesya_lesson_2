function reversWord (word) {
    let newWord = "";
    for(let i = word.length-1; i>=0; i--){
newWord += word[i];
    }
return newWord;
};
let a = reversWord("Alesya");
console.log(a)