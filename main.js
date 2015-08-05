//Code Variable
var code = 0;
//Interns Variable
var interns = 0;
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
//Save Game function
function saveGame(){
	var save = {
		code: code,
		interns: interns,
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
    createCode(interns);											
    document.getElementById('interns').innerHTML = interns;		
    document.getElementById('code').innerHTML = code;			
    var internCost = Math.floor(10 * Math.pow(1.2,interns));	
    document.getElementById('internCost').innerHTML = internCost;
    var codeps = interns;										
    document.getElementById('codeps').innerHTML = codeps;
}, 1000);
//Game update - 60 second interval
window.setInterval(function(){
	saveGame()
}, 60000);
