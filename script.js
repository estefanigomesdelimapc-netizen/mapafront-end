// Hover na logo
document.querySelector(".logo").addEventListener("mouseover", function(){
  this.style.color = "#ff66b2";
});
document.querySelector(".logo").addEventListener("mouseout", function(){
  this.style.color = "#ff3399";
});

// jQuery efeito em parágrafos
$(document).ready(function(){
  $("p").click(function(){
    $(this).fadeOut().fadeIn();
  });
});
