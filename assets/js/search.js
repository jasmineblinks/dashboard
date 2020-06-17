function myFunction() {
    var input, filter, table, list, title, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    main = document.getElementById("main");
   
    list=main.querySelectorAll('main .section')
    for (i = 0; i < list.length; i++) {
      title = list[i].querySelectorAll('main .section .title')[0];
      if (title) {
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          list[i].style.display = "";
        } else {
          list[i].style.display = "none";
        }
      }       
    }
  }