// Import stylesheets
import './style.css';
let token = "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"

// Write Javascript code!
let clientXMLHttpRequest = new XMLHttpRequest();

function getUser() {
  clientXMLHttpRequest.open("GET", "https://api.github.com/users/octocat", true);
  clientXMLHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
  clientXMLHttpRequest.send();

  clientXMLHttpRequest.onreadystatechange = function() {
    console.log(clientXMLHttpRequest.responseText);
  }

}

getUser();

