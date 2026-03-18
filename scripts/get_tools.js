fetch('/list/list_tools.json')
  .then(response => response.json())
  .then(tools => {
    const container = document.getElementById('cards-container');

    tools.forEach(tool => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${tool.title}</h2>
        <p>${tool.description}</p>
        <a href="${tool.download_link}">Download</a>
        <a href="${tool.source}">Source</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('error parsing JSON:', error);
  });