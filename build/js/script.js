(function () {
'use strict';

window.addEventListener('load', function () {
  var btn = document.querySelector('.btn');
  var block = document.querySelector('.response-block');
  var myUrl = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
  var httpRequest = new XMLHttpRequest();

  function receivingData(url) {
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.addEventListener('readystatechange', function () {
      btn.innerHTML = 'Готово!';

      if (httpRequest.status !== 200) {
        block.innerHTML = "".concat(httpRequest.status, ": ").concat(httpRequest.statusText);
      } else {
        block.innerHTML = "".concat(httpRequest.responseText);
      }
    });
    btn.innerHTML = 'Загрузка...';
    btn.classList.add('btn--disabled');
    btn.disabled = true;
  }

  btn.addEventListener('click', function () {
    receivingData(myUrl);
  });
});

}());
