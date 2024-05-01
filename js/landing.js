var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById('slide-number');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

var commentElement = document.getElementById('comment');
var commentcontainer = document.getElementById('commentcontainer');
var username = document.getElementById('personname');
var personNameElement = document.getElementById('personname');
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for (var i = 1; i <= slidesCount; i++) {

    var paginationItem = document.createElement('li');

    paginationItem.setAttribute('data-index', i);

    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    };
}

theChecker();
function nextSlide() {
        currentSlide++;
        if (currentSlide > slidesCount) {
            currentSlide = 1;
        }
        theChecker();
}


function prevSlide() {

        currentSlide--;
        if (currentSlide < 1) {
            currentSlide = slidesCount;
        }
        theChecker();
}
function theChecker() {
    commentcontainer.classList.add('fade-in'); // Remove the fade-out class to reset the opacity
setTimeout(function() {
    commentcontainer.classList.remove('fade-in'); // Add the fade-out class to trigger the fade-out animation
    var currentComment = sliderImages[currentSlide - 1].getAttribute('data-comment');
    commentElement.textContent = currentComment;
}, 600);
    slideNumberElement.textContent = currentSlide + ' / ' + slidesCount;
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    var currentComment = sliderImages[currentSlide - 1].getAttribute('data-comment');
    commentElement.textContent = currentComment;
    var currentname = sliderImages[currentSlide - 1].getAttribute('data-name');
    username.textContent = currentname;
    var personName = sliderImages[currentSlide - 1].parentNode.querySelector('.title-bold').textContent;
    personNameElement.textContent = personName;
}
function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    paginationsBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}