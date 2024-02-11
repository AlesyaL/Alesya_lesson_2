function Country (capital,language,territory) {
    this.capital = capital
    this.language = language
    this.territory = territory
}
let France = new Country ("Paris","french","643.801 km2")
let Portugal = new Country ("Lisbon", "portuguese","92.391 км² ")

console.log(France.language)
console.log(Portugal.territory)