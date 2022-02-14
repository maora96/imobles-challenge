export function fetchWithBody(url, metodo, conteudo) {
    return fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(conteudo),
    });
  }