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
    var reg = /\d\d\d/;
    var index = str.search(reg);
    if(index > -1){
      return str.substr(index, 3);
    }else{
      return false;
    }

  },

  matchesPattern : function(str) {
    var reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return reg.test(str);
  },

  isUSD : function(str) {
    var reg = /^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/;
    return reg.test(str);
  }
};
