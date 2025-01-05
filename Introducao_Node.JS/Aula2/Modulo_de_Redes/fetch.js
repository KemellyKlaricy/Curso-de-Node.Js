fetch('http://localhost:3000')
    .then(responde => responde.text()) // Corrigido para 'responde.text()'
    .then(data => console.log(data));

async function makeRequeste() {
    const response = await fetch('http://localhost:3000');
    const data = await response.text();

    console.log(data);
}

makeRequeste();
