// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
teamMembers.forEach((member) => console.log(member));

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
teamMembers.shift(); // ['Emilia', 'Miikka', 'Saara']
console.log(teamMembers);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
teamMembers.pop(); // ['Emilia', 'Miikka']
console.log(teamMembers);

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
teamMembers.unshift('Aleksi'); // ['Aleksi', 'Emilia', 'Miikka']
console.log(teamMembers);

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
teamMembers.push('Linda'); // ['Aleksi', 'Emilia', 'Miikka', 'Linda']
console.log(teamMembers);

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
let newTeamMembers = teamMembers.slice(2); // ['Miikka', 'Linda']
console.log(newTeamMembers);

// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
let miikkaIndex = teamMembers.indexOf('Miikka'); // 2
console.log(miikkaIndex);

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
let jaakkoIndex = teamMembers.indexOf('Jaakko'); // -1 (ei löydy)
console.log(jaakkoIndex);

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
let miikkaIndexForSplice = teamMembers.indexOf('Miikka');
teamMembers.splice(miikkaIndexForSplice, 1, 'Karoliina', 'Bettina'); // ['Aleksi', 'Emilia', 'Karoliina', 'Bettina', 'Linda']
console.log(teamMembers);

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
let extendedTeamMembers = [...teamMembers, 'Hemmo']; // ['Aleksi', 'Emilia', 'Karoliina', 'Bettina', 'Linda', 'Hemmo']
console.log(extendedTeamMembers);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
let copiedTeamMembers = teamMembers.slice(); // ['Aleksi', 'Emilia', 'Karoliina', 'Bettina', 'Linda']
console.log(copiedTeamMembers);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
let newMembers = ['Tiina', 'Daniel'];
let allTeamMembers = teamMembers.concat(newMembers); // ['Aleksi', 'Emilia', 'Karoliina', 'Bettina', 'Linda', 'Tiina', 'Daniel']
console.log(allTeamMembers);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
let jukkaIndices = [];
teamMembers.forEach((member, index) => {
  if (member === 'Jukka') {
    jukkaIndices.push(index);
  }
});
console.log(jukkaIndices); // если Jukka есть в списке, он вернется в виде индекса

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
let upperCaseMembers = teamMembers.map((member) => member.toUpperCase()); // ['ALEKSI', 'EMILIA', 'KAROLIINA', 'BETTINA', 'LINDA']
console.log(upperCaseMembers);
