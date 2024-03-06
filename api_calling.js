async function getAllUsers()
{
    const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f22fcd5367mshc04d3c0bd27c053p1f43b9jsn4023dfae2e49',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	// const result = await response.json();
    const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

getAllUsers();