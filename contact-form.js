
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

function sendEmail(){
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "savabarbarov96@gmail.com",
  Port : "2525",
  Password : "4447743A92BB20A7194219F50A37982C16E5",
  To : 'savabarbarov96@gmail.com',
  From : document.getElementById("email").value,  
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);
}
