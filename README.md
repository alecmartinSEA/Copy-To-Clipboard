# Copy-To-Clipboard

Code that uses clipboard.js to copy a certian piece of text and shows a user feedback that they copied said text.

## Installation

Make sure jQuery and clipboard.js are imported to your file. You can download their file or use their content delivery system.

```<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
 

 <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>

```

## Usage


Import jQuery & clipboard.js
Create an element with an ID, Class, & data-clipboard-text.
data-clipboard-text will be the text you want to copy.

in a new JS file or between <script> Initiate cliboard


```
var clipboard = new ClipboardJS('.btn'); 
```

Write a success function where you make the ID into a variable and create a new element if worked.   
Use clipboard.destroy() if you want it only to run once.

```
clipboard.on("success", function() {
  
//copy email
  var copy = document.getElementById("copy");
//Create a paragraph that says copied
  copy.insertAdjacentHTML("afterend", "<p>Copied</p>");
  
  //Only Run once
  clipboard.destroy();
});
```

create an error function just in case it doesn't work.
```
//If it didn't work show error
clipboard.on("error", function() {
  document.body.insertAdjacentHTML('beforeend', '<div>that didnt work.</div>');
});
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
