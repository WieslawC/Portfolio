/* #region  TYPE TEXT FUNCTION */
const typeText = function (inputText, targetContainer) {
  let textToDisplay = "";
  let currentLetterPossition = 0;

  let itsTimeToStop = setInterval(() => {
    textToDisplay += inputText[currentLetterPossition++];
    targetContainer.text(`${textToDisplay}|`);
    if (currentLetterPossition == inputText.length) {
      clearInterval(itsTimeToStop);
      targetContainer.text(textToDisplay);
    }
  }, 100);
}
/* #endregion */

typeText("About me", $("div.about p.aboutTitle"));

//PARALLAX BACKGROUND SCROLL
$(document).scroll(() => {
  $("header img.headerBackgroundImage").css("top", `${$(window).scrollTop() / 2}px`);
});

//TOGGLE MOBILE MENU
$('.menuIcon').click(() => {
  $('.headerNavigation').toggleClass('active');
})


const scrollToElement = function (trigger, target, time = 1000) {
  trigger.click(() => {
    $([document.documentElement, document.body]).animate({
      scrollTop: target.offset().top
    }, time);
    $('.headerNavigation').toggleClass('active');
  })
}

scrollToElement($('.menuHome'), $('.wrapper'));
scrollToElement($('.menuAbout'), $('div.about'))
scrollToElement($('.menuProjects'), $('div.projects'))