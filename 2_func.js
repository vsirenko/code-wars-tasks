function one(callback){
 return callback ? callback(1) : 1
}
function two(callback){
    return callback ? callback(2) : 2
}

function plus(a) {
    
    return (b) => b + a
}

console.log(one(plus(two())));


