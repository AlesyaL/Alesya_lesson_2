let person ={
    name: "Alesya",
    surname: "Litun"
}
let engineer = {
    education: "high",
    language: "english",
    __proto__:person
    
}
let Qa_engineer ={
    skill: "automation",
    __proto__:engineer
}

//console.log(Qa_engineer.education)

for (let value in Qa_engineer)
   console.log(Qa_engineer[value])
