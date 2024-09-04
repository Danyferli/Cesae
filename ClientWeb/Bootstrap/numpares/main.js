// Criar uma funçao que verifique os numeros pares

function numeroPar()
{
    //Variaveis
    let inicio = document.getElementById("rangeInicio").value
    let fim = document.getElementById("rangeFim").value
    
    let numerosPares =" "
    //For *(iniciaização; comparaçao; incremento)
    console.log(inicio)
    console.log(inicio)
    for(var i = inicio; i < fim; i++)
        {

        //Qual a condiçao do retorno

        if(i% 2===0)
            {
            numerosPares += i +" "
            console.log(numerosPares)
        }

}

document.getElementById("textoNumerosPares").innerText = "Numeros pares são: " + numerosPares

}



