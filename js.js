let lottery ={
	name:{
		names:[]
	},
	chance:{
		chances:[]
	}
} 

let btn = document.querySelector(".btn3");
btn.addEventListener('click',(e) => {
  var name = document.querySelector(".name").value;
  var chance = document.querySelector(".chance").value;

  for (var i=0; i <Number(chance); i++) {
  	lottery.name.names.push(name)
  }



  document.querySelector(".name").value="";
  document.querySelector(".chance").value="";

  
  console.log(lottery.name.names)



});


document.querySelector(".btn2").addEventListener('click',(e) => {
  		var count =lottery.name.names.length;
  		var final = Math.ceil(Math.random()*count)
  		let modal = document.querySelector(".modal-body");
  		modal.innerHTML=`برنده ی مسابقه کسی نیست جز  ${lottery.name.names[final-1]}`
});