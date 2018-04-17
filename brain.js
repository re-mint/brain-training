var brain = require("brain.js")

var net = new brain.NeuralNetwork();


net.train([{input: [0, 4, 1, 5, 2], output: [1]},
           {input: [0, 1, 1, 7, 4], output: [2]},
           {input: [1, 0, 2, 9, 8], output: [1]},
           {input: [1, 0, 2, 7, 7], output: [2]},
           {input: [1, 0, 2, 1, 1], output: [3]},
           {input: [2, 9, 3, 2, 4], output: [1]},
           {input: [7, 7, 1, 7, 2], output: [3]},
           {input: [9, 4, 3, 5, 9], output: [2]},
           {input: [1, 1, 1, 3, 0], output: [3]}]);

var output = net.run([1, 0, 2, 9, 3]);  //1

console.log(output)

var output = net.run([1, 7, 1, 0, 3]);  //2

console.log(output)

output = net.run([0, 3, 4, 4, 4]);  //3

console.log(output)