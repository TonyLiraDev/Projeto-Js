
//Nome do Aluno - nota 1 - nota 2 - média - aprovado

var nomes = ["Cleber", "Vanessa", "Jéssica"]
var notas1 = [2.0, 7.5, 9.0]
var notas2 = [10, 4.0, 5.0]

function media(n1,n2){
    
    return (n1 + n2)/2
}


function passou(coco){
    if(coco >= 6){
    return "Aprovado"
}
    else{
        return "Reprovado"
    }
}


for (var index in nomes){

    var A1 = notas1[index]
    var A2 = notas2[index]
    
    var m = media(A1, A2)
    
    console.log(nomes[index] + " - " + A1 + " - " + A2 + " - " + m + " - " + passou(m))


}