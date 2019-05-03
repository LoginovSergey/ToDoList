
buttonadd.addEventListener("click", function(){
	var newLi = document.createElement("li");
	newLi.className = "list-group-item";
	newLi.innerHTML =  `<div class="row">
            <div class="col-md-1 text-center">
              <input type="checkbox">
            </div>
            <div class="col-md-10">`
             + inp.value +
            `</div>
            <div class="col-md-1 text-right removex">
              X
            </div>
          </div>`
    newLi.getElementsByClassName("removex")[0].addEventListener("click", function(){
	this.parentNode.parentNode.remove();
	})
	document.getElementById("list").appendChild(newLi);
});

Array.from(document.getElementsByClassName("removex")).forEach(function(item){
	item.addEventListener("click", function(){
	this.parentNode.parentNode.remove();
	})
});

