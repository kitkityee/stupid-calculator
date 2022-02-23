"use strict";

// Enter how much each person spent Ans: function sum up the total of an array
// Enter how much each person consumed Ans: function sum up the total of an array
// calculate the total amount each person should pay or get back Ans: function that calculates the difference between spent and consume
// calculate who owes who how much money if one > 0, xx should pay xxx $20
// store the money under each person's name

const summary = function (name, arrSpent, arrConsumed) {
  let sumSpent = 0;
  let sumConsumed = 0;

  for (let i = 0; i < arrSpent.length; i++) {
    sumSpent += arrSpent[i];
  }

  for (let i = 0; i < arrConsumed.length; i++) {
    sumConsumed += arrConsumed[i];
  }
  const finalMoney = sumSpent - sumConsumed;

  let person = {
    namen: name,
    accountBal: finalMoney,
  };
  console.log(person);
  return person;
};

const serviceFee = (3.99 + 1.25 + 2) / 3;
const discount = 0.9;

let nameKey0 = summary(
  "Joddie & Todd",
  [26.15, 56.79],
  [30 * discount, 6.3, 7.8, 3, 9.95 * 2, 6, 3, serviceFee]
);
let nameKey1 = summary(
  "Kit & Mitch",
  [56, 6],
  [7.9 * discount, 6.9 * discount, 3 * discount, 9.95, 8.75, serviceFee]
);
let nameKey2 = summary(
  "Regan & Charis",
  [3],
  [12.2 * discount, 7.8, 9.95, 4.25, serviceFee]
);

console.log(nameKey0.accountBal + nameKey1.accountBal + nameKey2.accountBal); //To make sure it works

let allPeopleSummary = [nameKey0, nameKey1, nameKey2];
console.log(allPeopleSummary);


const positiveAcArr = allPeopleSummary.filter((ppl) => {
  return ppl.accountBal > 0;
});

const negativeAcArr = allPeopleSummary.filter((ppl) => {
  return ppl.accountBal < 0;
});

for (let i = 0; i < positiveAcArr.length; i++) {
  console.log(`${negativeAcArr[0].namen} should pay ${positiveAcArr[i].namen} $${positiveAcArr[i].accountBal}}}`);
}

