


let str = 'hello world, max!'
function capitalize(){
return str.replace(/(^|\s)\S/g, function(a){ return a.toUpperCase()})
}
console.log(capitalize());