chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
     sendservicerequest(response.data);
  });
});

function sendservicerequest(selectedtext) {
  var serviceCall = 'http://www.google.com/search?q=' + selectedtext;
  chrome.tabs.create({url: serviceCall});
  alert("Thanks for trying RightClick!");
}