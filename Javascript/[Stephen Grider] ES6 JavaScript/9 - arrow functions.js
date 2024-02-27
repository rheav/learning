const team = {
	members: ["Jane", "Bill"],
	teamName: "Super Squad",
	teamSummary: function () {
		return this.members.map((member) => {
			return `${member} is on team ${this.teamName}`;
		});
	},
};

console.log(team.teamSummary());

const profile = {
	name: "Alex",
	getName: function () {
		return this.name;
	},
};

console.log(profile.getName());
