const movements: number[] = [10, 20];
const person: { full_name: string; age: number } = {
  full_name: "Ayobami Owoeye",
  age: 20,
};
const age : number = 20
console.log(movements);

let jsonString = '{"name": "Ayomide", "age": 25, "job": "Developer"}';
let parsedData = JSON.parse(jsonString);
console.log(parsedData);
console.log(parsedData.name); // Ayomide
console.log(parsedData.age);  // 25
console.log(parsedData.job);  // Developer


console.log("==",JSON.parse("true"));