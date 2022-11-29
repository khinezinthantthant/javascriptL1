// console.log('hay');

var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles);
var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents);

for(var x = 0 ; x < getacctitles.length; x++){
	// console.log(x);

	getacctitles[x].addEventListener("click",function(e){
		// console.log(e.target);
		// console.log(this);


		this.classList.toggle("active");
		var getcontent = this.nextElementSibling;
		// console.log(getcontent);


		if(getcontent.style.height){
			getcontent.style.height=null; //beware can;t set 0
		}else{
			console.log(getcontent.scrollHeight);
			getcontent.style.height=getcontent.scrollHeight +"px";
		}
	});

	if(getacctitles[x].classList.contains("active")){
		getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
	}
}






// OR






// var getacctitles = document.querySelectorAll('.acctitle');
// var getacccontents = document.querySelectorAll('.acccontent');
// // console.log(getacctitles);

// getacctitles.forEach(function(getacctitle){
// 	getacctitle.addEventListener('click',function(e){
// 		// console.log(e.target);

// 		e.target.classList.toggle("active");

// 		var getcontent = e.target.nextElementSibling;
// 		// console.log(getcontent);

// 		if(getcontent.style.height){
// 			getcontent.style.height = null;
// 		}else{

// 			getcontent.style.height=getcontent.scrollHeight+"px";
// 		}
// 	});

// 	if(getacctitle.classList.contains('active')){
// 		getacctitle.nextElementSibling.style.height=getacctitle.nextElementSibling.scrollHeight+"px";
// 	}
// });