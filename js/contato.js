/**
 * @file: contato.js
 * @author: Felipe Dib
 * @description: script responsável pelas configurações referentes ao envio de email. 
 * @version 1.0.1 (07/06/2020)
 */

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  /**
   * Responsável pela confirmação do envio do e-mail.
   * @function
   * @name success
   */
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Email enviado com sucesso!";
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  }

  /**
   * Informa erro na tentativa de envio do email.
   * @function
   * @name error 
   */
  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

/**
 * Responsável pelo uso de requisões ajax no envio do e-mail.
 * @function 
 * @name ajax 
 * @param {*} method parâmetro para definição do método.
 * @param {*} url parâmetro de uso da url. 
 * @param {*} data parâmetro para atribuição dos dados.
 * @param {*} success parâmetro de confirmação de envio do e-mail.
 * @param {*} error parâmetro para informar erro no envio de e-mail.
 */
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}