Java.perform(function () {

	let b = Java.use("ba.s$a$b");
	b["invoke"].overload().implementation = function () {
		console.log(`b.invoke is called`);
		let result = false;
		console.log(`b.invoke result=${result}`);
		return result;
	};
});

