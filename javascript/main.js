const prijslijst = [];
prijslijst[1] = 9.95; // Fu Yong Hai
prijslijst[2] = 4.35; // Kipsaté
prijslijst[3] = 6.35; // Fricandeau Spezial

var output = document.getElementById('totaalbedrag');

function berekenBedrag()
{
	// Maak een array van alle elementen met klassenaam item
	var items=document.getElementsByClassName("item");
	var selectedItems = "";
	var amount = 0;
	
	// Itereer door de opgehaalde elementen
	for(var i=0; i<items.length; i++)
	{
		// Check of de elementen checkboxen zijn en gecheckt zijn
		if(items[i].type=='checkbox' && items[i].checked==true)
		{
			// Voeg het geselecteerde item toe aan de variabele selectedItems
			selectedItems+=items[i].value+"\n";
			// Convert de tekst naar float
			amount = amount + parseFloat(items[i].value);
		}
	}
	alert(amount);
	// Pinnen vanaf groter dan 5 euro
	if (amount > 5)
	{
		output.insertAdjacentHTML('afterend', '<div id="pin">Wilt u alstublieft pinnen?</div>');
	}
	else
	{
		document.getElementById("pin").remove();
	}

	// Output het eindbedrag
	output.insertAdjacentHTML('afterend', '<marquee>EINDBEDRAG</marquee>');
}

function submitCheck(checkbox)
{
	if (checkbox.checked == true)
	{
		var item = document.getElementById("totaalbedrag").disabled = false;
	}
	else if (checkbox.checked == false)
	{
		var items=document.getElementsByClassName("item");
		var selectedItems = "";
		var itemsChecked = false;
		for(var i=0; i<items.length; i++)
		{
		// Check of de elementen checkboxen zijn en gecheckt zijn
			if(items[i].type=='checkbox' && items[i].checked==true)
			{
				itemsChecked = true;
			}
		}

		if (itemsChecked == false)
		{
			var item = document.getElementById("totaalbedrag").disabled = true;
		}
	}
}