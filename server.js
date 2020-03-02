const express=require('express');
const app=express();

//routing
app.get('/', (req, res)=>{
	const user={
		name: 'Bishwajit',
		hobby: 'soccer'
	}
	res.send(user);
});
app.listen(3000);
