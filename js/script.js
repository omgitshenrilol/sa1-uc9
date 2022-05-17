$(document).ready(function () {

    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

setInterval(slide, 3000)

    function slide() {
        if($(".banner-ativo").next().length){
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
             
        }else{
            $(".banner-ativo").removeClass().hide()
            $("#carrossel img:eq(0)").addClass("banner-ativo").show()


        }
    }

    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")
        // if ($("#menu").hasClass("menu-ativo")){
        //     $("#menu").removeClass("menu-ativo")

        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })
})



let menu = document.getElementById('menu')

function mostrarMenu(){
    if (menu.style.display == "none" ){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }

}

// function mostrarPopup() {
//     window.alert("Bem-vindo a nossa loja =)")
// }

let email = document.getElementById("campo-email");

function enviarEmail() {
    let emailDigitado = email.value
    console.log(emailDigitado)

}

