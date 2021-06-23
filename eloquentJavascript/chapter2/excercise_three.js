console.log("Excercise 3");

let size = 50;
let str = "";
let strSpace = "_";
let strHash = "#";
let space = true;

for(let strRowSize = 0; strRowSize < size; strRowSize++){
    for(let strColSize = 0; strColSize < size; strColSize++){
        space ? str = str + strSpace : str = str + strHash
        space = !space;
    }
    str = str + "\n";
}

console.log(str);