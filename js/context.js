const getNavigatorLanguage = () => (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
const redirectIfNot=function(lang,target){
   let redirect = false;
   let clang = getCookie("lang");
   if(clang!=""){
     if(clang!=lang){
       redirect=true;
     }
   } else if(getNavigatorLanguage()!=lang){
     redirect=true;
   }
   if(redirect){
     window.location.href = target;
   }
}
const redirectIf=function(lang,target){
   let redirect = false;
   let clang = getCookie("lang");
   if(clang!=""){
     if (clang==lang){
       redirect=true;
     }
   } else if(getNavigatorLanguage()==lang){
     redirect=true;
   }
   if(redirect){
     window.location.href = target;
   }
}
const setLangCookie= function(lang){
  setCookie("lang",lang,30);
}

const setCookie= function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie=function(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
