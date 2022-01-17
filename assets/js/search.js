const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q='; //'https://www.google.com/search?q=site%3A+'
//const site = 'pagedart.com';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);