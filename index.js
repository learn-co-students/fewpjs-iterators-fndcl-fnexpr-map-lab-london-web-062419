const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// return word.charAt(0).toUpperCase() + word.slice(1);



// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = students.map(student => student + " the wizard")


// const titleCased = tutorials.map(function(tutorial) {
//   return tutorial.charAt(0).toUpperCase() + tutorial.slice(1);
// })


// Long-ass Legacy Solution

function titleCased() {
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  });
}

// Better ES6 Arrow Function Solution

// const titleCased = tutorials.map(tutorial => {
//   return tutorial
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// });

