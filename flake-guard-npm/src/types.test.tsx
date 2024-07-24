// types.test.ts
import { ConfigObj, FlakeGuardResult, Assertion } from "./types";

describe("ConfigObj Interface", () => {
  it("should create a valid ConfigObj", () => {
    const configObj: ConfigObj = {
      runs: 5,
      user: "testUser",
      apiKey: "abc123",
    };

    expect(configObj.runs).toBe(5);
    expect(configObj.user).toBe("testUser");
    expect(configObj.apiKey).toBe("abc123");
  });
});

describe("FlakeGuardResult Interface", () => {
  it("should create a valid FlakeGuardResult", () => {
    const flakeGuardResult: FlakeGuardResult = {
      test1: {
        passed: 10,
        failed: 2,
        skipped: 1,
      },
      test2: {
        passed: 8,
        failed: 3,
        skipped: 0,
      },
    };

    expect(flakeGuardResult.test1.passed).toBe(10);
    expect(flakeGuardResult.test1.failed).toBe(2);
    expect(flakeGuardResult.test1.skipped).toBe(1);
    expect(flakeGuardResult.test2.passed).toBe(8);
    expect(flakeGuardResult.test2.failed).toBe(3);
    expect(flakeGuardResult.test2.skipped).toBe(0);
  });
});

describe("Assertion Interface", () => {
  it("should create a valid Assertion", () => {
    const assertion: Assertion = {
      fullName: "Test Full Name",
      status: "passed",
    };

    expect(assertion.fullName).toBe("Test Full Name");
    expect(assertion.status).toBe("passed");
  });
});
