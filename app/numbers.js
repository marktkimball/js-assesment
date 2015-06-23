exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    var multipled = a * b
    return parseFloat(multipled.toPrecision(12));
  }
};
