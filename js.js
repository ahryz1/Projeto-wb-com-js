

function nota(){
  var notafinal=0;
  if (document.getElementById('certa1').checked)
  {
    notafinal++;
  }
  if (document.getElementById('certa2').checked)
  {
    notafinal++;
  }
  if (document.getElementById('certa3').checked)
  {
    notafinal++;
  }
  if (document.getElementById('certa4').checked)
  {
  notafinal++;
  }
  if (document.getElementById('certa5').checked)
  {
    notafinal++;
  }
  if (document.getElementById('certa6').checked)
  {
  notafinal++;
  }
  if (document.getElementById('certa7').checked)
  {
    notafinal++;
  }
  alert("Sua nota e: "+notafinal);
}
