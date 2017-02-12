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

function openDialogBox(){
	var dialog = document.getElementById('window')
  dialog.showModal(); 
  document.getElementById('exit').onclick = function() {  
    dialog.close();  
	};  
}

function addNewLabel(){
	var ele = document.createElement("div");
  ele.setAttribute("class","box");
  ele.setAttribute('ondrop',"drop(event)")
  ele.setAttribute('ondragover','allowDrop(event)')
 	var newDiv = document.createElement("div");
 	newDiv.setAttribute("class","label");
  newDiv.innerHTML= document.getElementById('lable').value;
  ele.appendChild(newDiv)
  document.getElementById('window').close();
  document.getElementById('board').appendChild(ele);
}