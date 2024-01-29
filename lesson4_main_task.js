let carFuel = "Disel"
let carSize = "M"
let myFunc = function (carFuel="Disel",carSize="XL"){
    if (carFuel !=="Disel" || carSize !=="XL"){
       return "Refuel station for car " + carSize + " with gasoline " + carFuel
     }
       return "Refuel station for car XL with gasoline Disel"
    }

console.log(myFunc())


