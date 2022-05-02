function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex') //f de formulario
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //Crianca
                img.setAttribute('src','bbhomem.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','homemjovem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','homemadulto.jpg')
            }else{
                //Idoso
                img.setAttribute('src','homemidoso.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //Crianca
                img.setAttribute('src','bbmulher.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','mulherjovem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','mulheradulta.jpg')
            }else{
                //Idoso
                img.setAttribute('src','mulheridosa.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}