/**
 * Unit Tests for the API Endpoints
 *
 * @group unit
 */

import greeter from "../src/index";

// Test for greeter function
describe("greeter", () => {
	it("should return a greeting", () => {
		expect(greeter("test")).toBe("Hello, test!");
	});
});
