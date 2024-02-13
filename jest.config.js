/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
	preset: "ts-jest/presets/default-esm",
	testEnvironment: "node",
	runner: "groups",
	setupFiles: ["dotenv/config"],
};
