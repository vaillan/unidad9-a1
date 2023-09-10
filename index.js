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

