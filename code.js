//textTyping
const aboutText = "About me";

let textToDisplay = '';
let i = 0;
const target = $('div.about p.aboutTitle');

let itsTimeToStop = setInterval(()=>{
    textToDisplay += aboutText[i++];
    target.text(`${textToDisplay}|`);
    if(i == aboutText.length){
        clearInterval(itsTimeToStop);
        target.text(textToDisplay);
    } 
},100);


//parallax background scroll
$(document).scroll(()=>{
    $("header img.headerBackgroundImage").css("top", `${$(window).scrollTop()/2}px`);
})

//show menu icon
if(window.innerWidth > 750)
{
    $(document).scroll(()=>{
        if($(window).scrollTop() > 100){
            document.querySelector('.headerNavigation').classList.add('active');
        }
        else {
            document.querySelector('.headerNavigation').classList.remove('active');
        }
    })
}
else{
    document.querySelector('.headerNavigation').classList.remove('active');
}


$('.menuIcon').click(()=>{
    document.querySelector('.headerNavigation').classList.toggle('active');
})


$(".menuHome").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top 
    }, 1000);
    if($('.headerNavigation').hasClass('active')){
        document.querySelector('.headerNavigation').classList.toggle('active');
    }
});

$(".menuAbout").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about").offset().top - 100
    }, 1000);
    document.querySelector('.headerNavigation').classList.toggle('active');
});

$(".menuProjects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".projects").offset().top 
    }, 1000);
    document.querySelector('.headerNavigation').classList.toggle('active');
});
