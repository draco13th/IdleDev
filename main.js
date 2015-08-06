//Code Variable
var code = 0;
//Interns Variable
var interns = 0;
//Programs Variable
var programs = 0;
//Generate Code Function
function createCode(number){
	code = code + number;
	document.getElementById("code").innerHTML = code;
};
//Hire Intern Function
function hireIntern(){
    var internCost = Math.floor(10 * Math.pow(1.2,interns));    	
    if(code >= internCost){                                   		
        interns = interns + 1;                                  	
    	code = code - internCost;                          			
		document.getElementById('interns').innerHTML = interns;  	
        document.getElementById('code').innerHTML = code;  			
    };
    var nextCost = Math.floor(10 * Math.pow(1.2,interns));       	
    document.getElementById('internCost').innerHTML = nextCost;  	
};
//Compile Program Function
function compileProgram(){
	if(code >= 50) {
		code = code - 50;
		programs = programs + 1
		document.getElementById('code').innerHTML = code;
		document.getElementById('programs').innerHTML = programs;
	};
};
//Save Game function
function saveGame(){
	var save = {
		code: code,
		interns: interns,
		programs: programs,
	}
	localStorage.setItem("save",JSON.stringify(save));
};
//Hard Reset Function
function deleteSave(){
	var areusure = confirm("This will delete all of your current progress, would you like to continue?")
	if (areusure == true) {
		localStorage.removeItem("save");
		location.reload();
	}
};
//Game update - 1 second interval
window.setInterval(function(){
	createCode(interns);											//Allow the interns to code
	document.getElementById('interns').innerHTML = interns;			//Update interns
    document.getElementById('code').innerHTML = code;				//Update code
	document.getElementById('programs').innerHTML = programs;		//Update programs
	var internCost = Math.floor(10 * Math.pow(1.2,interns));		//Keep track of the intern cost
	document.getElementById('internCost').innerHTML = internCost;	//Update intern cost
	var codeps = interns;											//Keep track of LoC per Second
	document.getElementById('codeps').innerHTML = codeps;			//Update LoC per Second
}, 1000);
//Game update - 60 second interval
window.setInterval(function(){
	saveGame()
}, 60000);