// Dummy data

let user_id = 0;

const houses = [
	{
		user_id: user_id++,
		name: 'John',
		address: '1111 Example Way',
		city: 'Salt Lake City',
		state: 'UT',
		zipcode: '11111',
	},
	{
		user_id: user_id++,
		name: 'Mary',
		address: '2222 Example Blvd.',
		city: 'Denver',
		state: 'CO',
		zipcode: '22222',
	},
	{
		user_id: user_id++,
		name: 'Peter',
		address: '3333 Example St.',
		city: 'New York City',
		state: 'NY',
		zipcode: '33333',
	},
];

module.exports = {
	get: (req, res) => {
		res.send(houses);
	},
	post: (req, res) => {
		const { name, address, city, state, zipcode } = req.body
		let house = 	{
			user_id: user_id++,
			name,
			address,
			city,
			state,
			zipcode,
		},
	}
};
