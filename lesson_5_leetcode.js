let prefix = function (s){
    if (s.length === 0){
        return "";
    } 
    let commPrefix = s[0];
    for (let i=1; i<s.length; i++){
        while(s[i].indexOf(commPrefix) !==0) {
            commPrefix = commPrefix.slice(0, -1);
            if (commPrefix === "") 
            return ""
        }
    }
return commPrefix;
}
let a = prefix (["dog","racecar","car"]);
let b = prefix (["flower","flow","flight"]);
console.log(a)
console.log (b)