
function openForm()
{
  document.querySelector(".container123").style.display="block";
  document.querySelector(".container123")
}

function closeForm()
{
  document.querySelector(".container123").style.display="none";
}

function background(){
  var element = document.getElementById(".container123");
  element.classList.add(".overlay");
}