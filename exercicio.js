function multiplicacao(array1, array2) {
    var tRowsA = array1.length;
    var tCollA = array1[0].length;
    var tCollB = array2[0].length;
    resultado = new Array();
    for (var i = 0; i < tRowsA; ++i) { //Repete 2 x
        resultado[i] = new Array(tCollB);
        for (var j = 0; j < tCollB; ++j) { //Repete 2x
            resultado[i][j] = 0;
            for (var k = 0; k < tCollA; ++k) { //Repete 2x
                if(array1[i][k] <= array2[k][j]){
                    if(array1[i][k]>=resultado[i][j]){
                        resultado[i][j] = array1[i][k];
                    }
                }
                if(array2[k][j] <= array1[i][k]){
                    if(array2[k][j]>=resultado[i][j]){
                        resultado[i][j] = array1[k][j];
                    }
                }
            }
        }
        
    }
return resultado;
}

resCliente1 = [0.5,0.8];
resCliente2 = [0.9,0.3];
const respostasCliente = [resCliente1, resCliente2];
const conhecimento = [[0.5, 0.9],[0.8, 0.5]];
resultado = multiplicacao(respostasCliente, conhecimento);
console.log(resultado);


