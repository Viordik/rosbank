window.addEventListener('load', function () {
  const btn = document.querySelector('.btn');
  const block = document.querySelector('.response-block');
  const myUrl = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';

  const httpRequest = new XMLHttpRequest();

  function receivingData(url) {
    httpRequest.open('GET', url, true);
    httpRequest.send();

    httpRequest.addEventListener('readystatechange', () => {
      btn.innerHTML = 'Готово!';

      if (httpRequest.status !== 200) {
        block.innerHTML = `${httpRequest.status}: ${httpRequest.statusText}`;
      } else {
        block.innerHTML = (`${httpRequest.responseText}`);
      }
    });


    btn.innerHTML = 'Загрузка...';
    btn.classList.add('btn--disabled');
    btn.disabled = true;
  }

  btn.addEventListener('click', () => {
    receivingData(myUrl);
  });
});
