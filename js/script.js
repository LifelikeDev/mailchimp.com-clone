const navSearch = document.querySelector('.search-icon i');
const topmostForm = document.getElementById('topmost-form');
const closeSearch = document.querySelector('.search-delete');
const headerBarWrapper = document.querySelector('.header-bar__wrapper');
const headerBarLayout = document.querySelector('.header-bar__layout');


// adding event listener to search icon to display topmost search section 
navSearch.addEventListener('click', () => {

    topmostForm.style.display = 'block';
});

closeSearch.addEventListener('click', () => {

    topmostForm.style.display = 'none';
});

// change header bar color when page is scrolled downwards

window.addEventListener('scroll', () => {

    window.scrollY >= 80 ? headerBarLayout.style.backgroundColor = 'var(--link-text-color)' : headerBarLayout.style.backgroundColor = 'var(--header-primary-color)';

});

headerBarWrapper.addEventListener('mouseenter', () => {
    headerBarWrapper.classList.add('hovered');
});

headerBarWrapper.addEventListener('mouseleave', () => {
    headerBarWrapper.classList.remove('hovered');
});