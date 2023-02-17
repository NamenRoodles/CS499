fetch('webscraping/events.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data-container');
    container.innerHTML = JSON.stringify(data);
  });