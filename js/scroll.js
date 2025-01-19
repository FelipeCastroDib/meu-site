/**
 * @file: scroll.js
 * @author: Felipe Dib
 * @description: script responsável pela configuração de uso do scroll nos links internos da página index. 
 * @version 1.0.1 (07/06/2020)
 */

var $doc = $("html, body");
$('a[href*="#"]:not([href="#"])').click(function () {
  $doc.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
  return false;
});