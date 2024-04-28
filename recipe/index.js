const url = 'https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd';
const options = {
	method: 'GET',
	headers: {
        
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}