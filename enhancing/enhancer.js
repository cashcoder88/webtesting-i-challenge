module.exports = {
  succeed,
  fail,
  repair,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}



// STRETCH
// function get(item) {
//   return { ...item };
// }
