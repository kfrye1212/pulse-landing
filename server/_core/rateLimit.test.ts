import { describe, it, expect } from "vitest";
import {
  apiRateLimiter,
  oauthRateLimiter,
  publicRateLimiter,
} from "./rateLimit";

describe("Rate Limiters", () => {
  describe("oauthRateLimiter", () => {
    it("should be defined and be a function", () => {
      expect(oauthRateLimiter).toBeDefined();
      expect(typeof oauthRateLimiter).toBe("function");
    });
  });

  describe("apiRateLimiter", () => {
    it("should be defined and be a function", () => {
      expect(apiRateLimiter).toBeDefined();
      expect(typeof apiRateLimiter).toBe("function");
    });
  });

  describe("publicRateLimiter", () => {
    it("should be defined and be a function", () => {
      expect(publicRateLimiter).toBeDefined();
      expect(typeof publicRateLimiter).toBe("function");
    });
  });
});
