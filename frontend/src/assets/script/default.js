console.log('glitch.js loaded')
const glitchTexts = document.querySelectorAll('.glitch');

glitchTexts.forEach((glitchItem) => {
    glitchItem.innerHTML = `<span class="glitch-span">${ glitchItem.innerHTML }</span>${ glitchItem.innerHTML }<span>${ glitchItem.innerHTML }</span>`;
});


// Ratings
// let ratings = document.querySelectorAll('.rating');
//
// ratings.forEach((rating) => {
//     let ratingValue = parseInt(rating.getAttribute('data-rating'));
//     console.log(ratingValue);
//     let ratingImage = rating.querySelectorAll('.rating-image');
//     console.log(ratingImage);
//     let innerHtml = '';
//     for (let i = 0; i < ratingValue; i++) {
//         innerHtml += ratingImage.outerHTML;
//     }
//     console.log(innerHtml);
//     rating.innerHTML = innerHtml;
// })