//Keep track of the Code Variable
var code = 0;
//Keep track of the Interns Variable
var interns = 0;

//Gain one line of code when button is clicked
function createCode(number){
	code = code + number;
	document.getElementById("code").innerHTML = code;
};

//Hire Intern Function
function hireIntern(){
    var internCost = Math.floor(10 * Math.pow(1.1,interns));    	//works out the cost of this intern
    if(code >= internCost){                                   		//checks that the player can afford the intern
        interns = interns + 1;                                  	//increases number of interns
    	code = code - internCost;                          			//removes the code spent
		document.getElementById('interns').innerHTML = interns;  	//updates the number of interns for the user
        document.getElementById('code').innerHTML = code;  			//updates the number of code for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,interns));       	//works out the cost of the next intern
    document.getElementById('internCost').innerHTML = nextCost;  	//updates the intern cost for the user
};

//Save game function
function saveGame(){
	var save = {
		code: code,
		interns: interns,
	}
	localStorage.setItem("save",JSON.stringify(save));
};
//Delete save function
function deleteSave(){
	localStorage.removeItem("save");
};
//Test function for div elements
function test(){
	alert("This div button thing works :D");
}

//Game loop that will call anything within it once a second
window.setInterval(function(){
	
	createCode(interns);											//Allow the interns to code
	document.getElementById('interns').innerHTML = interns;			//Update interns
    document.getElementById('code').innerHTML = code;				//Update code
	var internCost = Math.floor(10 * Math.pow(1.1,interns));		//Keep track of the intern cost
	document.getElementById('internCost').innerHTML = internCost;	//Update intern cost
	var codeps = interns;											//Keep track of LoC per Second
	document.getElementById('codeps').innerHTML = codeps;			//Update LoC per Second

}, 1000);