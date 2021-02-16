
const ages =[18 , 23 , 44 , 99, 33, 11];

const ages2 =[21,14,29, 41, 55,32,55];

const ages3 = [19,77, 44, 33, 22,];


// const allAges= ages.concat(ages2).concat(ages3);

const allAges = [...ages, ...ages2, 7, ...ages3]; // Spread Operator Facility :


//console.log(allAges);

//STEP-2:
//=======================================
const business = 650;
const minister = 450;
const sochib = 250;

//const maximum = Math.max(business,minister,sochib);
//============================================================

const taka = [650, 450, 250];
const maximum = Math.max(...taka);

console.log(maximum);



