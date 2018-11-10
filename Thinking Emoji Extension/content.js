var url = window.location.href
setTimeout(function(){
  if (true) {
    if (url.indexOf('?' !== -1)) {
      url = url.split("?")[0]
    }
    //var post = (document.getElementsByClassName('graf')[0].innerHTML).replace(/&nbsp;/g, ' ') + ' \n\n' + url
    //console.log(post)
    /*navigator.clipboard.writeText("boi").then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });*/
  } /*else if (url.indexOf('https://www.cssdesignawards.com/') !== -1) {
    var post = '#inspiration' + '\n\n' + document.getElementsByClassName("single-website__thumbnail")[0].href
    console.log(post)
    navigator.clipboard.writeText(post).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }*/
}, 2000);