// write a js function that takes an array of object as parameter
// function name must be "vaxTrail"
// this function will return an object that have 4 properties A,B,C,D
// A will have person with age 20-30 with temperature less than 100
// B will have person with age 31-40 with temperature less than 100
// C will have person with age 41-50 with temperature less than 100
// D will have any range of age with temperature greater than equal 100

const boothLine = {
    A: [],
    B: [],
    C: [],
    D: [],
};

const vaxTrail = (personList) => {
    for (const person of personList) {
        // console.log(person);
        if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
            boothLine.A.push(person);
        } else if (person.age >= 31 && person.age <= 40 && person.temperature < 100) {
            boothLine.B.push(person);
        } else if (person.age >= 41 && person.age <= 50 && person.temperature < 100) {
            boothLine.C.push(person);
        } else if (person.temperature >= 100) {
            boothLine.D.push(person);
        }
    }
    // console.log(boothLine);
    return boothLine;
};

// vaxTrail([
//     { name: "sunil", age: 21, temperature: 98 },
//     { name: "Biplap", age: 35, temperature: 88 },
//     { name: "sunil", age: 48, temperature: 78 },
//     { name: "Biplap", age: 55, temperature: 68 },
//     { name: "sunil", age: 25, temperature: 108 },
//     { name: "Biplap", age: 36, temperature: 102 },
// ]);
