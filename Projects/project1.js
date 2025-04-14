
const colorButtons = document.querySelectorAll(".button");

colorButtons.forEach((button) => {
 
  button.addEventListener('click', function() {
    document.body.style.backgroundColor = button.style.backgroundColor;
  });
});
