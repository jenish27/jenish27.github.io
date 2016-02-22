
var imagecount = 2;
var total = 9;

function slide(x){
    var Image = document.getElementById("img");
    imagecount = imagecount+x;
    
    if(imagecount > total) {imagecount = 2; }
    if(imagecount<2){imagecount = total;}
    
    
    Image.src = "Images/img_524"+ imagecount +".png";
    
    
      
}
window.setInterval(function slideA(){
    var Image = document.getElementById("img");
    imagecount = imagecount+1;
    
    if(imagecount > total) {imagecount = 2; }
    if(imagecount<2){imagecount = total;}
    
    
    Image.src = "Images/img_524"+ imagecount +".png";
    
    
      
},2500);
