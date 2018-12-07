
var bad = /^(A+)*B/

for (var loop = 0; loop < 40; loop++) {


	console.log("loop: " + loop);
	const start = process.hrtime();

	const target = "A".repeat(loop) + "C";

	target.match(bad);

	const elapsed = process.hrtime(start);

	if (elapsed[0] == 0) {
		console.log(`      ${elapsed[1]} nanos`);
	} else {
		console.log(`      ${elapsed[0]} seconds`);
	}
}
