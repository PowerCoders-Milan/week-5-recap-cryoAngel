var button = document.querySelector('button');

button.addEventListener('click', function(){
    var div = document.getElementById('div1');
    var p = document.createElement('p');
    p.setAttribute("id", "test");
    div.appendChild(p);
   var text = document.getElementById('text');
   document.getElementById("test").innerHTML = text.value;
   
})


