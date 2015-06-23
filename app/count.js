exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    var i;
    function counter () {
      console.log(start++);

      if (start <= end) {
        i = setTimeout(counter, 100);
      }
    }

    counter();

    return {
      cancel : function () {
        clearTimeout(i);
      }
    };
  }
};

//This code works too, but JS-Assesment hates it:
    //   setInterval(function(){
    //     if(start <= end){
    //       console.log(start);
    //       start++;;}}, 100);
    // }
