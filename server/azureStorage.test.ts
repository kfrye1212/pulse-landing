import { describe, it, expect, beforeAll } from "vitest";
import {
  azureStoragePut,
  azureStorageGet,
  azureStorageGetUrl,
  azureStorageDelete,
} from "./azureStorage";

// Note: These tests require AZURE_STORAGE_CONNECTION_STRING to be set
// They will be skipped if the connection string is not configured

const hasAzureConfig = !!process.env.AZURE_STORAGE_CONNECTION_STRING;
const describeIfConfigured = hasAzureConfig ? describe : describe.skip;

describeIfConfigured("Azure Storage", () => {
  const testKey = `test-${Date.now()}.txt`;
  const testData = "Hello, Azure Blob Storage!";
  const testContentType = "text/plain";

  it("should upload data with azureStoragePut", async () => {
    const result = await azureStoragePut(testKey, testData, testContentType);

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("url");
    expect(result.key).toBe(testKey);
    expect(result.url).toContain(testKey);
  });

  it("should download data with azureStorageGet", async () => {
    // First upload the data
    await azureStoragePut(testKey, testData, testContentType);

    // Then download it
    const result = await azureStorageGet(testKey);

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("url");
    expect(result).toHaveProperty("content");
    expect(result.key).toBe(testKey);
    expect(result.content.toString()).toBe(testData);
  });

  it("should get URL with azureStorageGetUrl", async () => {
    // First upload the data
    await azureStoragePut(testKey, testData, testContentType);

    // Then get the URL
    const result = await azureStorageGetUrl(testKey);

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("url");
    expect(result.key).toBe(testKey);
    expect(result.url).toContain(testKey);
  });

  it("should delete data with azureStorageDelete", async () => {
    // First upload the data
    await azureStoragePut(testKey, testData, testContentType);

    // Then delete it
    const result = await azureStorageDelete(testKey);

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("deleted");
    expect(result.key).toBe(testKey);
    expect(result.deleted).toBe(true);
  });

  it("should handle Buffer data", async () => {
    const bufferKey = `test-buffer-${Date.now()}.bin`;
    const bufferData = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]); // "Hello"

    const uploadResult = await azureStoragePut(
      bufferKey,
      bufferData,
      "application/octet-stream"
    );
    expect(uploadResult.key).toBe(bufferKey);

    const downloadResult = await azureStorageGet(bufferKey);
    expect(downloadResult.content).toEqual(bufferData);

    // Cleanup
    await azureStorageDelete(bufferKey);
  });

  it("should normalize keys by removing leading slashes", async () => {
    const keyWithSlash = `/test-normalize-${Date.now()}.txt`;
    const expectedKey = keyWithSlash.replace(/^\/+/, "");

    const result = await azureStoragePut(keyWithSlash, testData, testContentType);

    expect(result.key).toBe(expectedKey);
    expect(result.key).not.toContain("//");

    // Cleanup
    await azureStorageDelete(keyWithSlash);
  });
});

describe("Azure Storage Error Handling", () => {
  it("should throw error when connection string is missing", async () => {
    // Save original env var
    const originalConnectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

    // Temporarily unset the connection string
    delete process.env.AZURE_STORAGE_CONNECTION_STRING;

    // Test should throw error
    await expect(azureStoragePut("test.txt", "data")).rejects.toThrow(
      "Azure Storage connection string missing"
    );

    // Restore original env var
    if (originalConnectionString) {
      process.env.AZURE_STORAGE_CONNECTION_STRING = originalConnectionString;
    }
  });
});
