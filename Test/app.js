var getmodal = document.getElementById('signupmodal');
var getbtnsignup =document.getElementById('signup');
var getbtnclose = document.querySelector('.btn-close');
var getbtnfullscreen = document.getElementById('fullscreen');
var getbtnclosescreen = document.getElementById('closescreen');

getbtnsignup.addEventListener('click',function(){
	getmodal.style.display="block";

	isfullscreen();
});

getbtnclose.addEventListener('click',function(){
	getmodal.style.display="none";
});

window.onclick=function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display="none";
	}
}


var getde = document.documentElement;
// console.log(getde);

getbtnfullscreen.addEventListener('click',function(){

	localStorage.setItem('mytask',"1");

	// if(getde.requestFullscreen){
	// 	getde.requestFullscreen();
	// }else if(getde.msrequestFullscreen){
	// 	getde.msRequestFullscreen();
	// }else if(getde.webkitrequestFullscreen){
	// 	getde.webkitRequestFullscreen();
	// }

	isfullscreen();

	getbtnclosescreen.style.display="inline-block";

});


getbtnclosescreen.addEventListener('click',function(){
	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msexitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	getbtnclosescreen.style.display="none";
});


function isfullscreen(){
	if(localStorage.getItem('mytask') === '1'){
		getde.requestFullscreen();
	}else{
		localStorage.setItem('mytask',"0");
	}
}

isfullscreen();