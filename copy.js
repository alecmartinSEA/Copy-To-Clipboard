//Create new instance
var clipboard = new ClipboardJS('.btn');


//If it worked
clipboard.on("success", function() {
  
//copy email
  var copy = document.getElementById("copy");
//Create a paragraph that says copied
  copy.insertAdjacentHTML("afterend", "<p>Copied</p>");
  
  //Only Run once
  clipboard.destroy();
});

//If it didn't work show error
clipboard.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didnt work.</div>');
});