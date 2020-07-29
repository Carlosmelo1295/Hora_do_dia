function carregar() {
    var msg = window.document.getElementById('msg')//div que contém a mensagem com a hora
    var img = window.document.getElementById('imagem')//div que contém a foto 
    var data = new Date()
    var hora = data.getHours()//pegar hora
    var minutos = data.getMinutes()//pegar os minutos
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`//escrever na div msg 
    if (hora >= 0 && hora < 12) { //condições para mudança de horário 
        // BOM DIA!
        img.src = 'https://media2.giphy.com/media/1X8XwNVmlhnkBugSBZ/giphy.gif?cid=ecf05e476otd9vmej80fy09z0zj5i9sjszklbdey66zc4jda&rid=giphy.gif'
        document.body.style.background = "#ffb949"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'https://media2.giphy.com/media/1hMmAbOE57QaVgCgc1/giphy.gif'
        document.body.style.background = "#e55039"
    } else {
        //BOA NOITE!
        img.src = 'https://media2.giphy.com/media/xT0xeFgKBiOGkQGrf2/giphy.gif?cid=ecf05e4793479481e75ccb70f9745eeef7c336fa9dfbf57a&rid=giphy.gif'
        document.body.style.background = "#2f3640"
    }
}