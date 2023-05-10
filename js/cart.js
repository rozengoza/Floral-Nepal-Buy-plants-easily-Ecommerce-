const lilyButton = document.getElementById('lily');
const messageElement = document.getElementById('message');

lilyButton.addEventListener('click', function() {
	// add lily to cart
	console.log('Lily added to cart');

	// send request to server to log cart event
	const xhr = new XMLHttpRequest();
	xhr.open('POST', '/log', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log('Cart event logged successfully');

			// update the message element
			messageElement.textContent = 'Item added successfully';
		}
	};
	xhr.send(JSON.stringify({ event: 'add_to_cart', product: 'lily' }));
});
