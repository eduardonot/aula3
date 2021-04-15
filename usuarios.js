var nomesDisponiveis = ["Claudio","Renan","Maicon","Thiago","Diego","Douglas","Henrique","Leonardo","Eduardo","Ronaldo","Vinicius"]
var nomesCadastrados = []
function exportaUsuarios(){
    console.log(nomesCadastrados)
}
function cadastraUsuarios(){
    var gerarnomesDisponiveis = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)]
    console.log(`O usuario ${gerarnomesDisponiveis} foi cadastrado com sucesso!`)
    nomesCadastrados.push(gerarnomesDisponiveis)
}
module.exports = {cadastraUsuarios, exportaUsuarios}