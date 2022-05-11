/* eslint-disable no-unused-vars */
const loud = 'loud';
const name = 'Cody';

const dog = {
  bark() {
    return 'ruff ruff!';
  },
  name,
  [`${loud}Bark`]() {
    return this.bark().toUpperCase();
  },
};

// const { bark, loudBark } = dog;
// console.log(bark);
// console.log(loudBark);
