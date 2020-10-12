
var colors = ["red", "blue", "green", "yellow","indigo","violet"];  
index = 0;                                  
document.getElementById("changes").onclick = function() {
  document.body.style.background = colors[index];  
  index = (index + 1) % colors.length;             
}
    
