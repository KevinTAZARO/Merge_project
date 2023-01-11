//Sujet 1
const array1 = [10, 15, 3, 7];
const k1 = prompt("Saisir un nombre pour vérifier si la somme de 2 chiffres du tableau pour le sujet 1 sera égale à ce nombre, voici l'array : \n\n [10, 15, 3, 7]");
const array2 = [3, 7, 8, 3, 6, 1];
const k2 = prompt("Saisir un nombre pour vérifier si la somme de 2 chiffres du tableau pour le sujet 2 sera égale à ce nombre, voici l'array : \n\n [3, 7, 8, 3, 6, 1]");


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
