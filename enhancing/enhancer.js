module.exports = {
  succeed,
  fail,
  repair,
};

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return { ...item}
  }

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
