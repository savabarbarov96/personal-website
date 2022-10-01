
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


const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

  console.log(entry)
  if (entry.isIntersecting){
    entry.target.classList.add('show');
  }
  else {
    entry.target.classList.remove('show')
  }
});

});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));