// popup.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the save button
    document.getElementById('saveButton').addEventListener('click', function() {
        // Retrieve input value
        var hubNames = document.getElementById('hubNames').value;
        console.log(hubNames);
        var hubNamesArray = hubNames.split(' ').map(name => name.trim());
        console.log(hubNamesArray);
        
        chrome.storage.local.set({"hubNames":hubNamesArray}, function() {console.log("Saved");});

        //chrome.runtime.sendMessage({ action: "saveButtonClicked" }, function(response) {console.log("Message sent to content script");});

        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {
              from: "popup",
              action: "saveButtonClicked",
              data: hubNamesArray // You can pass any data you want to send to the content script
            });
          });
        

    });
  });
  

//   var centralDiv = document.getElementsByClassName('.col-3');
//         console.log(document)
//         console.log(centralDiv);
//         // Variable containing the string
//         var dynamicString = "YourDynamicStringHere";

//         // Create a new div element to hold the provided HTML
//         var newRow = document.createElement('div');
//         newRow.className = 'row';

//         // Set the inner HTML of the new div with the dynamic string
//         newRow.innerHTML = "<div class='group-col selectedHub col-12'><svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 352 512' class='filter-remove-glyph' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg' style='color: red;'><path d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'></path></svg><strong>" + dynamicString + "</strong></div>";

//         // Append the new row div to the central div
//         centralDiv.appendChild(newRow);