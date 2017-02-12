function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function addNewTask() {
	var ele = document.createElement("div");
	ele.setAttribute("id","newq");
  ele.setAttribute("class","inner-box");
  ele.draggable = true;
  ele.setAttribute('ondragstart',"drag(event)")
  ele.innerHTML="New Task"
  document.getElementById('new').appendChild(ele);
}