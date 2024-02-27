const fs = require("fs");

// Create dir
if (!fs.existsSync("./new")) {
	fs.mkdir("./new", (err) => {
		if (err) throw err;
		console.log("Directory created");

		// Remove dir
		if (fs.existsSync("./new")) {
			fs.rmdir("./new", (err) => {
				if (err) throw err;
				console.log("Directory Removed");
			});
		}
	});
}
