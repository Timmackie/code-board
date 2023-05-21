var showMoreButton = document.getElementById('showmoreButton');

var currentPosts = parseInt(window.location.pathname.slice(1));
console.log(window.location.pathname.slice(1));
var increment = 5;

// Event listener for "Show 5 More" button
showmoreButton.addEventListener('click', function () {
    currentPosts += increment;
    window.location.href= `/${currentPosts}`;    
});


