function product(productId, productName, productPrice, productType)
{
	// Parameters koppelen aan variabelen in de klasse
	this.productId = productId;
	this.productName = productName;
	this.productPrice = productPrice;
	this.productType = productType;
}

// Productarray
let products = [];

products[0] = new product('1','Fu Yong Haï','9.95','Gerecht');
products[1] = new product('2','Kipsaté','4.35','Gerecht');
products[2] = new product('3','Fricandeau Spezial','6.35','Gerecht');
products[3] = new product('4','Cola','2.25','Drank');
products[4] = new product('5','Bier Teryaki','3.20','Drank');
products[5] = new product('6','Kraanwater','1.20','Drank');
