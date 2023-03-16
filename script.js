function search() {
    var input = document.getElementById("searchbar").value.toLowerCase();
    var paragraphs = document.getElementsByClassName("paragraphs");
    for (var i = 0; i < paragraphs.length; i++) {
      var text = paragraphs[i].innerText.toLowerCase();
      if (text.includes(input)) {
        paragraphs[i].style.display = "";
      } else {
        paragraphs[i].style.display = "none";
      }
    }
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });
//   This code does the same thing as before, but it listens for the "keydown" event on the entire document, rather than the "keyup" event on the search input. When the "Enter" key is pressed, it calls the "search" function to update the display of the paragraphs.
  
//   Also, note that I've modified the code to compare the lowercase version of the search input with the lowercase version of the paragraph text, to make the search case-insensitive.
  
  
  
  
  
  