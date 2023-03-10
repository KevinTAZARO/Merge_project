//Sujet 1
const array1 = [10, 15, 3, 7];
const k1 = prompt("Saisir un nombre pour vérifier si la somme de 2 chiffres du tableau pour le sujet 1 sera égale à ce nombre, voici l'array : \n\n [10, 15, 3, 7]");
const array2 = [1, 8, 10, 21];
const k2 = prompt("Saisir un nombre pour vérifier si la somme de 2 chiffres du tableau pour le sujet 2 sera égale à ce nombre, voici l'array : \n\n [1, 8, 10, 21]");


//Sujet 2
const array3 = [3, 7, 8, 3, 6, 1];
const array4 = [1, 4, 5, 8];


//Exercice 1
const sum = (array, k) => {
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === Number(k)){
            return true;
        }
      }
    }
    return false;
};
console.log("exercice 1 :\n");
console.log(sum(array1, k1));
console.log(sum(array2, k2));


//Exercice 2
const beWest = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let hasViews = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                hasViews = false;
            }
        }
        hasViews ? count++ : null;
    }
    return count;
};
console.log("\n\nexercice 2 :");
console.log(`Sur cette rue, il y a ${beWest(array3)} bâtiments qui a/ont une vue sur l'ouest`);
console.log(`Sur cette rue, il y a ${beWest(array4)} bâtiments qui a/ont une vue sur l'ouest`);


//Exercice 3
const sum2 = (array, k) => {
    let sumMissing = new Set();
    sumMissing.add(Number(k) - array[0]);
    
    for (let i = 1; i < array.length; i++) {
        let nextSum = Number(k) - array[i];
        if (sumMissing.has(array[i])) {
            return true;
        } else {
            sumMissing.add(nextSum);
        }
    }
    return false;
};
console.log("\n\nexercice 3 :");
console.log(sum2(array1, k1));
console.log(sum2(array2, k2));


//Exercice 4
const beWest2 = (array) => {
    let numberView = 1
    let maxHeight = array[array.length - 1]
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] > maxHeight) {
            maxHeight = array[i]
            numberView++
        }
    }
    return numberView
};
console.log("\n\nexercice 4 :");
console.log(`Sur cette rue, il y a ${beWest2(array3)} bâtiments qui a/ont une vue sur l'ouest`);
console.log(`Sur cette rue, il y a ${beWest2(array4)} bâtiments qui a/ont une vue sur l'ouest`);


//Exercice 5 et 6 sont les exercices 3 et 4
function findSumPair(numbers, k) {
    let seen = new Set();
    for (let i = 0; i < numbers.length; i++) {
        if (seen.has(k - numbers[i])) {
            return true;
        }
        seen.add(numbers[i]);
    }
    return false;
};
console.log("\n\nexercice 5 :");
console.log(sum2(array1, k1));
console.log(sum2(array2, k2));


//Exercice 6
function buildingsWithWestView(heights) {
    let count = 0;
    let max = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > max) {
            count++;
            max = heights[i];
        }
    }
    return count;
};
console.log("\n\nexercice 6 :");
console.log(`Sur cette rue, il y a ${beWest2(array3)} bâtiments qui a/ont une vue sur l'ouest`);
console.log(`Sur cette rue, il y a ${beWest2(array4)} bâtiments qui a/ont une vue sur l'ouest`);