let lessons = {
    first: "Physics",
    second: "Mathematics",
    third: "History"
}
let additionalLessons ={
    fourth: "Chemistry",
    fifth: "Geography",
    __proto__:lessons
}

console.log(additionalLessons.__proto__)
console.log(additionalLessons.third)