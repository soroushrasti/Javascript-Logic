
//Question 1: 
//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
//make a function that organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
let b=[13,4,5,6,3,5];
var dict={};

b.map(value => dict[value]=dict[value] ? dict[value] +1 : 1);


console.log(dict)

var final_list=[];

Object.keys(dict).forEach(  num => { dict[num] ===1 ?  final_list.push(parseInt(num) )  : final_list.push(Array(dict[num]).fill(parseInt(num) ) ) } )

console.log(final_list)


//Question 2:
// Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]
let list=[1,2,3];
let target= 4;

list.filter( (value1,index1) => list.find( (value2,index2) => value2+value1==target && index2!=index1 ) );