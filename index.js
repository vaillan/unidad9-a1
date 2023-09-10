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
    setAlert(clientXMLHttpRequest.responseText);
  }

}

/**
 * Función para mostrar resultado
 * @return {void}
 */
 function setAlert(value) {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    ${value}
  </div>
  `;
}

getUser();
