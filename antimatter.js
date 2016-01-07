#!/usr/bin/env node

console.log("Welcome to AntiMatter");


var args = process.argv.slice(2); 

if (args.length > 1) {
    throw new Error('Please specify only one argument');
}

process.argv.forEach(function(val, index) {
    console.log(index + " : " + val);
});

process.on('exit', function(code) {
    console.log("Thank you. Exiting.");
});
