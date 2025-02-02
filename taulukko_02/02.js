// Harjoitus 1: Määritä taulukon pituus ja ehto tarkistus
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function myAlphabetLength(arr) {
  let length = arr.length;
  console.log(`Taulukon myAlphabet pituus: ${length}`);
  if (length < 5) {
    console.log("Taulukon pituus on alle 5.");
  } else {
    console.log("Taulukon pituus on suurempi tai yhtä suuri kuin 5.");
  }
}

myAlphabetLength(myAlphabet);

// Harjoitus 2: Käy läpi taulukko ja kirjaa jokainen alkio sen indeksillä
const planets = ['Merkurius', 'Venus', 'Maa', 'Mars', 'Jupiter'];

planets.forEach((planet, index) => {
  console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
});

// Harjoitus 3: Kirjaa taulukon alkiot niiden tyyppeineen
const wowDatatypes = [1, 'text', false, null, undefined];

wowDatatypes.forEach((item, index) => {
  console.log(`Alkio: ${item}, Indeksi: ${index}, Tyyppi: ${typeof item}`);
});

// Harjoitus 4: Kirjaa taulukon alkiot ilman silmukkaa
let myArr = [1, 2, 'One', true];

myArr.forEach(item => console.log(item));

// Harjoitus 5: Etsi yhteiset kurssit kahden opiskelijan välillä
let student1Courses = ['Matematiikka', 'Englanti', 'Ohjelmointi'];
let student2Courses = ['Maantieto', 'Espanja', 'Ohjelmointi'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
commonCourses.forEach(course => console.log(`Yhteinen kurssi: ${course}`));

// Harjoitus 6: Kirjaa jokainen taulukon alkion kirjain
let furniture = ['Pöytä', 'Tuolit', 'Matto'];

furniture.forEach(item => {
  let letters = item.split('').join(', ');
  console.log(`Kirjaimet '${item}'-sanassa: ${letters}`);
});

// Harjoitus 7: Suodata positiiviset lämpötilat
let temperatures = [-5, 3, -1, 22, -40, 5, 18];

function getPositiveTemperatures(arr) {
  return arr.filter(temp => temp > 0);
}

console.log(getPositiveTemperatures(temperatures)); // [3, 22, 5, 18]

// Harjoitus 8: Suodata parittomat vuodet
function getOddYears(years) {
  return years.filter(year => year % 2 !== 0);
}

// Testaus
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
