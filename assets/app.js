AOS.init({
    duration:2000
});

const header = document.querySelector('.header');

window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }

}
const headerikdas = document.querySelector('.headerikdas');

window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        headerikdas.classList.add('active')
    }else{
        headerikdas.classList.remove('active');
    }

}

const headercaixa = document.querySelector('.headercaixa');

window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        headercaixa.classList.add('active')
    }else{
        headercaixa.classList.remove('active');
    }

}