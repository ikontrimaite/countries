"use strict"

// ANTRA UŽDUOTIS
// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai
// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

var countries = [
   { name: "Portugalija", width: 92212 , population: 10.26},
   { name: "Ispanija", width: 505370 , population: 47.35},
   { name: "Lietuva", width: 65300 , population: 2.795},
   { name: "Estija", width: 45338 , population: 1.326},
   { name: "Latvija", width: 64589 , population: 1.843}
]

console.log(countries)

 for(var elements of countries){
     console.log(`Šalis: ${elements.name},joje gyvena ${elements.population} mln. gyventojų.`)
     console.log(`Valstybės plotas: ${elements.width} km², plotas tenkantis vienam gyventojui: ${elements.width*1000000/elements.population} m².`)
  }
