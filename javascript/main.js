// Koppel variabelen aan HTML-elementen
var receipt = document.getElementById("receipt");
var orderOutput = document.getElementById("orderOutput");
var receiptTable = document.getElementById("receiptTable");
var totalSumOutput = document.getElementById("total");
var firstTime = true;

function berekenBedrag()
{
	receipt.style.display="none";

	// Maak een array van alle elementen met klassenaam amount
	var items = document.getElementsByClassName("amount");

	// Teller voor rijtje bestelde producten
	var counter = 1;
	var fullRow = "";
	var subTotal = [];
	var totalAmount = 0;

	if (firstTime == false)
	{
		orderOutput.innerHTML = "";
		totalSumOutput.innerHTML = "";
	}

	// Itereer door de opgehaalde elementen
	for(var i=0; i <items.length; i++)
	{
		// Check of de waarde van hoeveelheid is gewijzigd ten opzichte van default
		if(items[i].value > 0)
		{
			/* 
			console.log("Product: " + products[i].productName);
			console.log("Aantal: " + items[i].value);
			var tr = document.createElement("tr");
			td[1] = document.createElement("td");
			td[2] = document.createElement("td");
			td[3] = document.createElement("td");
			td[4] = document.createElement("td");
			td[5] = document.createElement("td");
			var counter = document.createTextNode(counter); // Teller
			var productName = document.createTextNode(products[i].productName); // Productnaam
			var productPrice = document.createTextNode(products[i].productPrice); // Productprijs
			var amount = document.createTextNode(items[i].value); // Hoeveelheid
			var subtotal = document.createTextNode((items[i].value * (products[i].productPrice * 100) / 100 ));

			td[1].appendChild(counter); // Tellerij-rij
			td[2].appendChild(productName); // Productnaam-rij
			td[3].appendChild(productPrice); // Productprijs-rij
			td[4].appendChild(amount); // Hoeveelheid-rij
			td[5].appendChild(subtotal); // Subtotaal-rij
			
			for (i=0;i<5;i++)
			{
				tr.appendChild(td[i]);
			}
			*/
			subTotal[i] =  items[i].value * products[i].productPrice;
			totalAmount = totalAmount + subTotal[i];
			//console.log(subTotal[i]);

			fullRow += "<tr><td>" + counter + "</td><td>" + products[i].productName + "</td><td>\u20AC " + products[i].productPrice + "</td><td>" + items[i].value + "</td><td>\u20AC " + subTotal[i].toFixed(2) + "</td></</tr>";

			counter++;
		}

	}

	totalSumOutput.innerHTML = ("Het totaalbedrag is: €"+ totalAmount.toFixed(2));

	// Zet de volledige rij-structuur van bestelde producten in de bon
	orderOutput.innerHTML = fullRow;
	
	// Pinnen vanaf groter dan 5 euro
	if (totalAmount > 5)
	{
		totalSumOutput.innerHTML += "<p>Wilt u pinnen?</p>";
	}
	
	playAudio("printingSound");
	
	// Wacht op geluidje voordat bonnetje komt
	setTimeout(function()
	{
		receipt.style.display="block";
		if (totalAmount >5)
		{
			playAudio("pinSound");
		}
	}, 5000);
	
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
function playAudio(file)
{
	// Maak audio-object

	if (file == "printingSound")
	{
		var audio = new Audio('resources/receipt.mp3');
	}
	else if (file == "pinSound")
	{
		var audio = new Audio('resources/pinnen.mp3');
	}
	// Speel audio
	audio.play();
}