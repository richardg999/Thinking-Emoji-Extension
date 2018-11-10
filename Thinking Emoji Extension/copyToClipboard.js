
// script to copy thinking emoji into clipboard
document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', '🤔');
    e.preventDefault();
});
document.execCommand('copy');