var nomesDisponiveis = ["Claudio","Renan","Maicon","Thiago","Diego","Douglas","Henrique","Leonardo","Eduardo","Ronaldo","Vinicius"]
var nomesDisponiveisCadastrados = []
function exportaUsuarios(){
    console.log(nomesDisponiveisCadastrados)
}
function cadastraUsuarios(){
    var gerarnomesDisponiveis = nomesDisponiveis[Math.floor(Math.random() * nomesDisponiveis.length)]
    console.log(`O usuario ${gerarnomesDisponiveis} foi cadastrado com sucesso!`)
    nomesDisponiveisCadastrados.push(gerarnomesDisponiveis)
}
module.exports = {cadastraUsuarios, exportaUsuarios}