// Import stylesheets
import './style.css';
let token = "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"
let clientXMLHttpRequest = new XMLHttpRequest();

// Write Javascript code!

/**
 * Obtien un usuario del repositorio publico de usuarios de github
 * @returns {void}
 */
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
 * @param {string}  
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
