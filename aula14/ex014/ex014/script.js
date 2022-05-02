function Contar(){
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var passos = document.getElementById('passo')
    var res = document.getElementById('resultado')

    var numero1 =Number(num1.value)
    var numero2 =Number(num2.value)
    var vpasso =Number(passos.value)
    
    //Tratamento de erros
    if (num1.value.length == 0 || num2.value.length == 0 || passos.value.length == 0 ){
        window.alert('[Erro] Faltam dados!')
    }
    else{
        if (vpasso <=0){
            window.alert("Passo Invalido! Considerando Passo 1 ")
            vpasso =1
        }
        //Contagem Crescente
        res.innerHTML = ("Contando: ")
        if (numero1 < numero2){
            for (var c= numero1; c<=numero2; c+=vpasso){ 
                res.innerHTML += `${c} \u{1F449}	`    //O +=que faz com que a string seja concatenada
            }
        }else{
        //Contagem Regressiva
            c = numero1
            while (c>= numero2){
            res.innerHTML+= `${c} \u{1F449}`
            c-=vpasso
        }
        }

        res.innerHTML += `\u{1F3C1}`
    }
     
}
