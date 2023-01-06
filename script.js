fetch('/path/to/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  const button = document.getElementById('load-button');
  button.addEventListener('click', () => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('data-container');
        container.innerHTML = data.name;  // Replace with the key of the data you want to display
      });
  });
  