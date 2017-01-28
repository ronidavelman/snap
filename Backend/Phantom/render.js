var page = require('webpage').create();
var system = require('system');
var args = system.args;
console.log(system.args[2]);
page.viewportSize = { width: 1920, height: 1080 };
page.open(renderUrl(system.args[1]), function(status) {
  if(status === "success") {
    page.render(cleanUrl(system.args[1])+'.png');
  }
  phantom.exit();
});

function renderUrl(url){
  if(url.indexOf('http://')==-1 || !url.indexOf('https://')==-1){
    return 'http://'+removeSlash(url);
  }else{
    return removeSlash(url);
  }
}
function cleanUrl(url){
  if(url.indexOf('http://')>-1 || url.indexOf('https://')>-1){
    // remove http or https
    var t = url;
    t = t.replace('http://','');
    t = t.replace('https://','');
    t = removeSlash(t);
    return t;
  }else{
    return removeSlash(url);
  }
}

function removeSlash(url){
  return url.replace('/','');
}
