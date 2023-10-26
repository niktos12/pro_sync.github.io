const arrow = document.getElementById('toggleArrow');
const text = document.getElementById('expandText');

arrow.addEventListener('click', () => {
    arrow.classList.toggle('active');
    if (text.style.maxHeight) {
        text.style.maxHeight = null;
    } else {
        text.style.maxHeight = text.scrollHeight + 'px';
    }
});
