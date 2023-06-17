/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
	preset: "ts-jest/presets/default-esm",
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	testEnvironment: "node",
	runner: "groups",
	resolver: "jest-node-exports-resolver",
	setupFiles: ["dotenv/config"],
};
