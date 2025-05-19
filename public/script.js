// public/script.js
document.getElementById('helloBtn').addEventListener('click', () => {
  fetch('/api/hello')
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').textContent = data.message;
    })
    .catch(err => {
      document.getElementById('response').textContent = 'Error: ' + err.message;
    });
});

