/*function pessoal() {
    fetch('https://swapi.dev/api/people/1')
        .then(response => response.json())
        .then(data => {
            const pessoa = document.getElementById("meuInput");
            const pessoa2 = document.getElementById("personagem");
            pessoa.value = data.name;
            pessoa2.value = data.name + " " + data.gender + " " + data.films;
        })
        .catch(error => {
            console.error('Erro ao fazer requisição para a API:', error);
        });
}
*/

function buscarPessoas() {
    let quantPessoas = 0;
    quantPessoas = document.getElementById("numero").value;

    fetch(`https://swapi.dev/api/people/${quantPessoas}`)
        .then(resposta => resposta.json())
        .then(data => {
            const nomeInput = document.getElementById("nomePessoa");
            const blocoInfo = document.getElementById("infoPessoa");

            nomeInput.value = data.name;
            blocoInfo.innerHTML = data.name + ", " + data.gender + ", " + data.films;

        })

        .catch(erro => {
            alert('API não está passando os dados', erro)
        });
}
