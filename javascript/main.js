// Koppel variabelen aan HTML-elementen
var receipt = document.getElementById("receipt");
var orderOutput = document.getElementById("orderOutput");
var receiptTable = document.getElementById("receiptTable");
var firstTime = true;

function initialize()
{
	// Maak bonnetje verborgen
	//receipt.style.visibility="hidden";
}

function berekenBedrag()
{
	//receipt.style.display="block";
	
	// Maak een array van alle elementen met klassenaam amount
	var items = document.getElementsByClassName("amount");
	var totalAmount = 0;
	var counter = 1;

	if (firstTime == false)
	{
		orderOutput.innerHTML = "";
	}
	
	// Maak een array van rows
	let newRow = [];
	// Itereer door de opgehaalde elementen
	for(var i=0; i <items.length; i++)
	{
		// Check of de waarde van hoeveelheid is gewijzigd ten opzichte van default
		if(items[i].value > 0)
		{
			console.log("Product: " + products[i].productName);
			console.log("Aantal: " + items[i].value);
			// createOrderRow(receiptTable,items[i].value,items[i].productName,items[i].value);

			// // Maak nieuwe rij in de tabel
			// newRow[i] = orderOutput.insertRow();
			// // Maak nieuwe cell in de tabel

			// let newCell = [];
			// let cellText = [];
			// newCell[0] = newRow[i].insertCell(0);
			// newCell[1] = newRow[i].insertCell(1);
			// newCell[2] = newRow[i].insertCell(2);
			// newCell[3] = newRow[i].insertCell(3);
			// newCell[4] = newRow[i].insertCell(4);
			
			
			// // Teller
			// cellText[i][0] = document.createTextNode(counter);

			// //Productnaam
			// cellText[i][1] = document.createTextNode(products[i].productName);
			
			// // Prijs
			// cellText[i][2] = document.createTextNode("\u20AC" + products[i].productPrice);
			
			// // Aantal
			// cellText[i][3] = document.createTextNode(items[i].value + " X");
			
			// // Subtotaal
			// cellText[i][4] = document.createTextNode("\u20AC" + ((products[i].productPrice * 100) * items[i].value) / 100);

			// for (var i=0; i < cellText[i].length; i++)
			// {
			// 	newCell[i].appendChild(newRow[i]);
			// }
			// Convert de tekst naar float
			totalAmount += parseFloat(items[i].value);

			counter++;
		}
	}
	// Pinnen vanaf groter dan 5 euro
	if (totalAmount > 5)
	{
		// output.insertAdjacentHTML('beforeend', '<div id="pin">Wilt u alstublieft pinnen?</div>');
	}
	else
	{
		//document.getElementById("pin").remove();
	}


	playAudio();
	
	// Wacht op geluidje voordat bonnetje komt
	/*setTimeout(function()
	{*/
    	//receipt.style.display="block";
	/*}, 5000);*/
	
	firstTime = false;	
}


// Functie omtrent bestelknop
function submitCheck(numberField)
{
	// Koppel HTML-entiteiten aan variabelen
	var items = document.getElementsByClassName("amount");
	var orderButton = document.getElementById("totaalbedrag");
	

	// Als het veranderde nummerveld zelf al groter is dan 0, zet bestelknop dan op enabled
	if (numberField.value > 0)
	{
		orderButton.disabled = false;
	}
	// Als het veranderde nummerveld zelf niet groter is dan 0, check dan of andere nummervelden dat wél zijn
	else
	{
		var selectedItems = "";
		var itemsInOrder = false;
		
		// Itereer door andere nummervelden
		for(var i=0; i < items.length; i++)
		{
		// Check of de elementen checkboxen zijn en gecheckt zijn
			if(items[i].value > 0)
			{
				itemsInOrder = true;
			}
		}

		if (itemsInOrder)
		{
			orderButton.disabled = false;
		}
		else
		{
			orderButton.disabled = true;
		}
	}
}


// Bonnenprintergeluidje
function playAudio()
{
	// Maak audio-object
	var audio = new Audio('resources/receipt.mp3');

	// Speel audio
	audio.play();
}

// function createOrderRow(tableName, productName, productPrice, orderAmount)
// {
// 	// Koppel tabelnaam aan parameter
// 	var tableName = document.getElementById(tableName);

// 	var newRow = tableName.insertRow();
// 	var newCell = [];

// 	newCell[1] = newRow.insertCell(1);
// 	newCell[2] = newRow.insertCell(2);
// 	newCell[3] = newRow.insertCell(3);

// 	// Productnaam
// 	var productName = document.createTextNode(productName);
// 	var productPrice = document.createTextNode(productPrice);
// 	var orderAmount = document.createTextNode(orderAmount);

// 	newCell[1].appendChild(productName);
// 	newCell[2].appendChild(productPrice);
// 	newCell[3].appendChild(orderAmount);
// }