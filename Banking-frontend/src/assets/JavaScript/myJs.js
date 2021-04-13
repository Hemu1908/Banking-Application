
function myFunction() {

    var getValue = document.getElementById("choose").selectedOptions[0].value;
    var col ;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("styled-table");
    tr = document.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those who don't match the search query
    if(getValue == 1) col = 3;
    else if(getValue == 2) col = 4;
    else if(getValue == 3) col = 6;
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[col];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
    }
}