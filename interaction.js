// ============ JAVASCRIPT ============
document.getElementById('btn').onclick = function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('demo').innerHTML = this.responseText;
  }
  xhttp.open("GET", './data.txt');
  xhttp.send();
}

// ============ JQUERY ============
/*
$(document).ready(function() {
  $('#btn').click(function() {
    $('#demo').load('./data.txt');
  });
});
*/
