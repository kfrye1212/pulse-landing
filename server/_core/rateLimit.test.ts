import { describe, it, expect } from "vitest";
import { apiRateLimiter, oauthRateLimiter, publicRateLimiter } from "./rateLimit";

describe("Rate Limiters", () => {
  it("should export oauthRateLimiter", () => {
    expect(oauthRateLimiter).toBeDefined();
    expect(typeof oauthRateLimiter).toBe("function");
  });

  it("should export apiRateLimiter", () => {
    expect(apiRateLimiter).toBeDefined();
    expect(typeof apiRateLimiter).toBe("function");
  });

  it("should export publicRateLimiter", () => {
    expect(publicRateLimiter).toBeDefined();
    expect(typeof publicRateLimiter).toBe("function");
  });
});
