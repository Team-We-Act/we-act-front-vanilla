window.onload = () => {
    "use strict";
    // if (!(n.serviceWorker && (typeof Cache !== 'undefined' && Cache.prototype.addAll))) return; 
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
      console.log('aaa')
    }

    $('#enter-magic-code').on('input', function(){
      let text = document.getElementById('enter-magic-code').value;
      let login_button =  document.getElementById("login-button");
      //console.log(text);
      if (text == '') {
        //console.log('empty');
        if (login_button.classList.contains('active-button'))
          login_button.classList.remove("active-button");
        login_button.classList.add('passive-button');
        login_button.disabled = true;
      } else {
        if (login_button.classList.contains('passive-button'))
          login_button.classList.remove("passive-button");
        login_button.classList.add('active-button');
        login_button.disabled = false;
      }
    });
  };