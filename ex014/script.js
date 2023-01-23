function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        img.src = 'manha1.png'
        document.body.style.background = '#F1F740'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = 'tarde1.png'
        document.body.style.background = '#E0842F'
    }
    else{
       img.src = 'noite1.png'
       document.body.style.background = '#070B35'
    }
   
}
