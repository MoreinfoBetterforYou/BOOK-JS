let percentage = (newlines, oldlines) => {  let difference = newlines - oldlines;   return (difference / oldlines) * 100;   }
let result =  percentage(272, 105);
let word = result > 0 ? "Increase of": "Decrease of";
console.log(`There has been ${word} ${result.toFixed(2)}% from the old file.`);

let nextGoal = (result, newlines) => (((result/100) - 1) * newlines) + newlines;
let nextTarget = nextGoal(result, 272);
console.log(`The new target for the lines of code to write is: ${nextTarget.toFixed(0)} lines.`);

let date = new Date(2025, 4, 7);
let customDate = new Date(2025, 4, 30);
let differenceInDays = (customDate - date) / 86400000;
let numberOfCommits = 47;
let average = numberOfCommits / differenceInDays;
console.table([`${numberOfCommits} Commits`, `${differenceInDays} Days`, `${average.toFixed(2)} Commits / Day`])
console.log();