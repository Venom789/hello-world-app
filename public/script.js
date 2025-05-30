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

document.getElementById('configBtn').addEventListener('click', () => {
  fetch('/api/config')
    .then(response => response.json())
    .then(config => {
      document.getElementById('dbUser').textContent = config.dbUser || 'Not set';
      document.getElementById('apiKey').textContent = config.apiKey || 'Not set';
      document.getElementById('connStr').textContent = config.connectionString || 'Not set';
    })
    .catch(err => {
      alert('Error fetching config: ' + err.message);
    });
});

// Handle TLS API call
const tlsBtn = document.getElementById('callTlsBtn');
if (tlsBtn) {
  tlsBtn.addEventListener('click', async () => {
    const output = document.getElementById('tlsResponse');
    output.innerText = 'Loading...';

    try {
      const res = await fetch('/proxy/tls'); // ← Call your backend proxy
      const data = await res.text();         // Use .json() if it's JSON
      output.innerText = data;
    } catch (err) {
      console.error(err);
      output.innerText = 'Failed to fetch TLS API.';
    }
  });
}

