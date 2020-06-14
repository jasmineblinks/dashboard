function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;


setTimeout(()=>{
  code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
}, 1000)


}

window.addEventListener('load',(e) => {
  let url = window.location.href;
  let htmlField = document.getElementById('html');
  let link = decodeURI(url.split('=')[1]);
  console.log(link);
  const api_url = 'https://mighty-shore-71308.herokuapp.com/';
  fetch(api_url + `link/${link}`,{
    method : 'GET'
  })
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    htmlField.value = response.html
    compile();
  })
  .catch((err) => {
    console.log(err);
  })
  // getHTML();
});
// compile();