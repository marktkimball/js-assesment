exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg = /\d/;
    return reg.test(str);
  },

  containsRepeatingLetter : function(str) {
    var reg = /([a-zA-Z])\1+/;
    return reg.test(str);
  },

  endsWithVowel : function(str) {
    var reg = /[aeiouAEIOU]/;
    var lastLetter = str.slice(-1);
    return reg.test(lastLetter);
  },

  captureThreeNumbers : function(str) {
    
  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
