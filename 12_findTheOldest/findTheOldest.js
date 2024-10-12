const findTheOldest = function(arr) {

    let now = new Date();
    const currentYear = now.getFullYear();

    const allAges = arr.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = currentYear;
        }
        return person.yearOfDeath - person.yearOfBirth;
    })

    const maxAge = Math.max(...allAges);
    const maxIndex = allAges.indexOf(maxAge);

    return arr[maxIndex];

//     let age;
//     let prevAge = 0;
//     let j;
//     let now = new Date();
//     const currentYear = now.getFullYear();

//     for (let i = 0; i < arr.length; i ++) {
//         if (!arr[i].yearOfDeath) {
//             arr[i].yearOfDeath = currentYear;
//         }
//         age = arr[i].yearOfDeath - arr[i].yearOfBirth;
//     if (age > prevAge) {
//         j = i;
//     }
//     prevAge = age;
// }
//     return arr[j];
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
