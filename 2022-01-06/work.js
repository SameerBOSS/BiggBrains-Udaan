function addCar() {
	let carname = document.getElementById('carname').value
	let price = document.getElementById('price').value
	let color = document.getElementById('color').value
	let image = document.getElementById('image').value
	//alert(`${carname} ${price} ${color} ${image}`)
	let car = {
		"carname":carname,
		"price":price,	
		"color":color,	
		"image":image,
	}
	var tableRef = document.getElementById('myTable').getElementsByTagName('tbody') [0];
	var newRow = tableRef.insertRow(tableRef.rows.length);
	newRow.innerHTML = createRow(tableRef.rows.length, car);
}


function createRow(index, item) {
	return `	     		
		<tr>
			<td>${index}<td>
			<td>${item.carname}<td>
			<td>${item.price}<td>
			<td>${item.color}<td>
			<td><img src="${item.image}" width="150px" hight="100px"><td>
		</tr>	
	`;
}

function clearRows(){
	var tableRef =document.getElementById('myTable').getElementsByTagName('tbody')[0];
	tableRef.insertHTML = ""
}