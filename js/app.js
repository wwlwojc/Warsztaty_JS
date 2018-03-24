'use strict';
document.addEventListener('DOMContentLoaded', function() {
      var dropdown = document.querySelector(".for-dropdown");
      var dropdownMenu = document.querySelector(".dropdown");
      
      dropdownMenu.style.display = "none";
    
      dropdown.addEventListener("mouseover", function(){
          dropdownMenu.style.display = "block";
      });
    
        dropdown.addEventListener("mouseout", function(){
        dropdownMenu.style.display = "none";
    });
});
