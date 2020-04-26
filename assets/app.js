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
const headerminva = document.querySelector('.headerminva');
window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        headerminva.classList.add('active')
    }else{
        headerminva.classList.remove('active');
    }
}

const headerspace = document.querySelector('.headerspace');
window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        headerspace.classList.add('active')
    }else{
        headerspace.classList.remove('active');
    }
}

const headerboschtok = document.querySelector('.headerboschtok');
window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        headerboschtok.classList.add('active')
    }else{
        headerboschtok.classList.remove('active');
    }
}

const headerune = document.querySelector('.headerune');
window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 50){
        headerune.classList.add('active')
    }else{
        headerune.classList.remove('active');
    }
}