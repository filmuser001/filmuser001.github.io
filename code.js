let elements = ["b1", "b2", "b3", "b4", "b5"];

function loadPalette(){

   let urldata = new URLSearchParams(window.location.search)

   let data = [];
   
   for (j = 1; j <= 10; j++){
       data.push(urldata.get(j.toString()))
       
   }
   
   for(i = 0; i < elements.length; i++){
       document.getElementById(elements[i]).style.backgroundColor = data[i]
       document.getElementById(elements[i]).innerText = data[i]
       document.getElementById(elements[i]).style.color = data[i+5]
   }

}

window.onload = function(){
    loadPalette()
}
