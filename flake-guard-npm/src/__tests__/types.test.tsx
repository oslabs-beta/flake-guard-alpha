import { ConfigObj, FlakeGuardResult, Assertion } from "../types.ts";

describe("ConfigObj Interface", () => {
  it("should create a valid ConfigObj", () => {
    const config: ConfigObj = {
      runs: 10,
      user: "testUser",
      apiKey: "abc123",
    };

    expect(config.runs).toBe(10);
    expect(config.user).toBe("testUser");
    expect(config.apiKey).toBe("abc123");
  });
});

describe("FlakeGuardResult Interface", () => {
  it("should create a valid FlakeGuardResult", () => {
    const result: FlakeGuardResult = {
      testSuite1: {
        passed: 10,
        failed: 2,
        skipped: 1,
      },
      testSuite2: {
        passed: 5,
        failed: 3,
        skipped: 0,
      },
    };

    expect(result.testSuite1.passed).toBe(10);
    expect(result.testSuite1.failed).toBe(2);
    expect(result.testSuite1.skipped).toBe(1);
    expect(result.testSuite2.passed).toBe(5);
    expect(result.testSuite2.failed).toBe(3);
    expect(result.testSuite2.skipped).toBe(0);
  });
});

describe("Assertion Interface", () => {
  it("should create a valid Assertion", () => {
    const assertion: Assertion = {
      fullName: "should return true when input is valid",
      status: "passed",
    };

    expect(assertion.fullName).toBe("should return true when input is valid");
    expect(assertion.status).toBe("passed");
  });
});
