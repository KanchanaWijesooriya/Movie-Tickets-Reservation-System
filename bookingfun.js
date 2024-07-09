// window.onload = function() {
// 	// console.log(JSON.parse($.cookie('name')));
// 	// localStorage.setItem("ref-no", "Ref #"+result.ref);
// 	// localStorage.getItem("ref-no");
// 	// localStorage.removeItem("ref-no");
// 	// Get a reference to the checkbox element
// 	// var checkbox = document.getElementById("myCheckbox");

// 	// function updateStatus(checkboxValue) {
// 	// 	// Send an AJAX request to a PHP script to update the status
// 	// 	var xhr = new XMLHttpRequest();
// 	// 	xhr.open("POST", "update_status.php", true);
// 	// 	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 	// 	xhr.onreadystatechange = function () {
// 	// 		if (xhr.readyState === 4 && xhr.status === 200) {
// 	// 			// Handle the response from the PHP script if needed
// 	// 			console.log(xhr.responseText);
// 	// 		}
// 	// 	};
// 	// 	xhr.send("value=" + checkboxValue);
//     }


function updateStatus(checkboxValue) {
	// Send an AJAX request to a PHP script to update the status
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "bookupdate_status.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// Handle the response from the PHP script if needed
			console.log(xhr.responseText);
		}
	};
	xhr.send("value=" + checkboxValue);
 }



	// Disable the checkbox
	// alert('test');

// 	let newarr = localStorage.getItem("mularray");
// 	let newminarr = sessionStorage.getItem("seatpossarr");
// 	let b = 0;
	
// 	var arrayJson = sessionStorage.getItem('myArray');
// 	var retrievedArray = JSON.parse(arrayJson);
// 	console.log(newminarr);
// 	// console.log(retrievedArray);

// 	for(let y=0; y<6; y++){
// 		for(let j=0; j<7; j++){
// 			if(retrievedArray[y][j] == 1){
				
// 				console.log(newminarr[b]);
// 				let checkbox = document.getElementById("check"+newminarr[b]);
// 				// checkbox.disabled = true;
// 				// checkbox.style.color = "rgb(246, 177, 94)";
// 				b++;
// 			}
// 		}
// 	}
	

	
// }



setInterval(addVal, 500);



let arr = [[],[],[],[],[],[]];

let arr2 = [[],[],[],[],[],[]];

let seatPos = [];

function addVal(){

	


	let x  = 0;
	let n = 0;

	arr[0][0] = document.getElementById("check1A");
	arr[0][1] = document.getElementById("check1B");
	arr[0][2] = document.getElementById("check1C");
	arr[0][3] = document.getElementById("check1D");
	arr[0][4] = document.getElementById("check1E");
	arr[0][5] = document.getElementById("check1F");
	arr[0][6] = document.getElementById("check1G");
	
	
	arr[1][0] = document.getElementById("check2A");
	arr[1][1] = document.getElementById("check2B");
	arr[1][2] = document.getElementById("check2C");
	arr[1][3] = document.getElementById("check2D");
	arr[1][4] = document.getElementById("check2E");
	arr[1][5] = document.getElementById("check2F");
	arr[1][6] = document.getElementById("check2G");
	
	
	arr[2][0] = document.getElementById("check3A");
	arr[2][1] = document.getElementById("check3B");
	arr[2][2] = document.getElementById("check3C");
	arr[2][3] = document.getElementById("check3D");
	arr[2][4] = document.getElementById("check3E");
	arr[2][5] = document.getElementById("check3F");
	arr[2][6] = document.getElementById("check3G");
	
	
	arr[3][0] = document.getElementById("check4A");
	arr[3][1] = document.getElementById("check4B");
	arr[3][2] = document.getElementById("check4C");
	arr[3][3] = document.getElementById("check4D");
	arr[3][4] = document.getElementById("check4E");
	arr[3][5] = document.getElementById("check4F");
	arr[3][6] = document.getElementById("check4G");
	
	
 	arr[4][0] = document.getElementById("check5A");
	arr[4][1] = document.getElementById("check5B");
	arr[4][2] = document.getElementById("check5C");
	arr[4][3] = document.getElementById("check5D");
	arr[4][4] = document.getElementById("check5E");
	arr[4][5] = document.getElementById("check5F");
	arr[4][6] = document.getElementById("check5G");

    arr[5][0] = document.getElementById("check6A");
	arr[5][1] = document.getElementById("check6B");
	arr[5][2] = document.getElementById("check6C");
	arr[5][3] = document.getElementById("check6D");
	arr[5][4] = document.getElementById("check6E");
	arr[5][5] = document.getElementById("check6F");
	arr[5][6] = document.getElementById("check6G");
	
	
	for(let y=0; y<6; y++){
		for(let j=0; j<7; j++){
			if(arr[y][j].checked == true) {
				arr2[y][j] = 1;
				x=x+1;

				let num;
				let veri;
				if(y == 0) {
					num = '1';
				}
				if(y == 1) {
					num = '2';
				}
				if(y == 2) {
					num = '3';
				}
				if(y == 3) {
					num = '4';
				}
				if(y == 4) {
					num = '5';
				}
				if(y == 5) {
					num = '6';
				}

				if(j == 0){
					veri = 'A';
				}
				if(j == 1){
					veri = 'B';
				}
				if(j == 2){
					veri = 'C';
				}
				if(j == 3){
					veri = 'D';
				}
				if(j == 4){
					veri = 'E';
				}
				if(j == 5){
					veri = 'F';
				}
				if(j == 6){
					veri = 'G';
				}

				seatPos[n] = num+veri;
				n++;

			}else {
				arr2[y][j] = 0;
			}
		}
	}

		
	document.getElementById("nSeats").value = x;
	
	let tot = x*1250;
	
	document.getElementById("sTot").value = tot;
		
	document.getElementById("seatNO").value = seatPos.toString();

	// console.log(arr2);
	// // localStorage.removeItem("myArray");
	// var arrayJson = JSON.stringify(arr2);
	// sessionStorage.setItem('myArray', arrayJson);
	// // localStorage.setItem("mularray", arr);

	// sessionStorage.removeItem("seatpossarr");
	// sessionStorage.setItem("seatpossarr", seatPos);
	
}

// function addCook(){
//     $.cookie('all', JSON.stringify(arr));
// }