exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr){
        return prev + curr;
      }
    );
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    var length = arr.length;
    arr[length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var allItems = {};
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
      allItems[arr[i]] = allItems[arr[i]] ? allItems[arr[i]] + 1 : 1;
    }

    for (var val in allItems) {
      if (allItems[val] > 1) {
        duplicates.push(eval(val));
      }
    }

    return duplicates;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexs =[];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        indexs.push(i);
      }
    }
    return indexs;
  }
};
