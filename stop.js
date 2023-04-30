Copy code
// fecha todas as abas do navegador
function closeAllTabs() {
  // obtém uma referência à janela principal do navegador
  var windowList = window.open("", "_self");
  // fecha a janela principal do navegador
  windowList.close();
}
