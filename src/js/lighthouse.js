(function (window, document) {
  'use strict';

  function destroyWidowsAndOrphans(e,m){

    // Variables
    var elements = e;
    var minWords = m;

    // JS
    var els = document.querySelectorAll(elements);
    for (var i = 0, len = els.length; i < len; i++) {
      var original = els[i].innerHTML,
          arr = original.split(' ');

      if (arr.length >= minWords){
        arr[arr.length - 2] += '&nbsp;' + arr.pop();
        els[i].innerHTML = arr.join(' ');
      }
    }
  }

  destroyWidowsAndOrphans('p,h1,h2,h3,h4,h5',3);

})(window, document);
