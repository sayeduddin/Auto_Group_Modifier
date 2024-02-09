// content.js

// Retrieve saved div names from storage
// chrome.storage.sync.get(['divNames'], function(data) {
//     var divNames = data.divNames;
  
//     // Function to move specified divs from group9 to col-3
//     function moveDivs() {
//       // Split the input value into an array of div names
//       var divNamesArray = divNames.split(',').map(name => name.trim());
  
//       // Select all divs inside group9 with names specified by the user
//       let divsToMove = Array.from(document.querySelectorAll('.group9 div[name]')).filter(div => divNamesArray.includes(div.getAttribute('name')));
  
//       // Select the destination column
//       let col3 = document.querySelector('.col-3');
  
//       // Move each div to col-3
//       divsToMove.forEach(div => {
//         col3.appendChild(div);
//       });
//     }
  
//     // Run the moveDivs function when the page is loaded
//     window.addEventListener('load', moveDivs);
//   });

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "saveButtonClicked") {
    // Execute your logic here
    console.log("hello sar");

    sendResponse({ success: true });

    chrome.storage.local.get("hubNames", function(result) {names=result.hubNames; console.log("saved");});

    console.log(names);
    
    var divsToClick = [...document.querySelectorAll('.hubPodName')];

    for (var i = 0; i < names.length; i++) {
      var divToClick = divsToClick.find(div => div.textContent.trim() === names[i]);
      if (divToClick) {
        // Simulate a click event on the div
        divToClick.click();
      } else {
        console.error('The specified div does not exist on the page.');
      }
    }



    // var col3Div = document.querySelector('.col-3');
    // var targetDiv = col3Div.children[0]; 
    
    // console.log(col3Div);
    

    // for (var i = 0; i < names.length; i++) {
    //   var newDiv = document.createElement('div');
    //   newDiv.innerHTML = '<div class="row"><div class="group-col selectedHub col-12"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" class="filter-remove-glyph" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: red;"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg><strong>' + names[i] + '</strong></div></div>';
    //   targetDiv.appendChild(newDiv);
    // }


    
    // // Read the data from Chrome storage
    // chrome.storage.local.get("hubNames", function(result) {
    //   var hubNamesArray = result.hubNames;
    //   console.log("Data read from Chrome storage:", hubNamesArray);
    //   // Now you can use hubNamesArray as needed
    // });
  }
});
  