document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('selectstart', function (event) {
    event.preventDefault();
});

document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

document.addEventListener('copy', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'a' || event.key === 'c' || event.key === 'A' || event.key === 'C')) {
        event.preventDefault();
    }
});
