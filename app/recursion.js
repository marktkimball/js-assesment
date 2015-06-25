exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var fibo = function(n){
      if(n <= 2){
        return 1;
      }else{
        return fibo(n - 1) + fibo(n - 2);
      }
    }
    return fibo(n);
  },

  validParentheses: function(n) {

  }
};
