const assertEqual = require(`./assertEqual`);

const tail = function(array) {
  array.shift();
  return array;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[0], "Labs");
assertEqual(result[1], "Labs");
assertEqual(result[1], "Lighthouse");
