var nomes = ["Claudio","Renan","Maicon","Thiago","Diego","Douglas","Henrique","Leonardo","Eduardo","Ronaldo","Vinicius"]
var lista = []
function exportaUsuarios(){
    console.log(lista)
}
function cadastraUsuarios(){
    var gerarNomes = nomes[Math.floor(Math.random() * nomes.length)];
    console.log(`O usuario ${gerarNomes} foi cadastrado com sucesso!`)
    lista.push(gerarNomes)
}
module.exports = {cadastraUsuarios, exportaUsuarios}