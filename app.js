//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function(){
    console.log("Let's get ready to party with jQuery!")
});
//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article').children('img').addClass('image-center');
//Remove the last paragraph in the article.
$('p').eq(5).remove();
//Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', Math.random * 100);
//Add an item to the list; it can say whatever you want.
$('<li>Hello I am new here</li>').css('color', 'orange').appendTo('third-child','li');
$('ol').append($('<li>', {text: "Hello I'm new here"}));
//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().append($('<p>', {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, natus qui nostrum libero atque hic distinctio sint facilis nihil possimus tenetur deserunt rerum laboriosam cum quisuam doloremque ducimus error.'}));
//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });
//Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
    $(this).remove();
})
$("img").on('click', function (e) {
    $(e.target).remove();
  });