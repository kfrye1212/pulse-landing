// Azure Blob Storage helpers for read and write operations
import { BlobServiceClient, BlockBlobClient } from "@azure/storage-blob";
import { ENV } from "./_core/env";

type AzureStorageConfig = {
  connectionString: string;
  containerName: string;
};

function getAzureStorageConfig(): AzureStorageConfig {
  const connectionString = ENV.azureStorageConnectionString;
  const containerName = ENV.azureStorageContainerName;

  if (!connectionString) {
    throw new Error(
      "Azure Storage connection string missing: set AZURE_STORAGE_CONNECTION_STRING"
    );
  }

  return { connectionString, containerName };
}

async function getBlobClient(blobName: string): Promise<BlockBlobClient> {
  const { connectionString, containerName } = getAzureStorageConfig();
  const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  
  // Ensure container exists
  await containerClient.createIfNotExists();
  
  return containerClient.getBlockBlobClient(blobName);
}

function normalizeKey(relKey: string): string {
  return relKey.replace(/^\/+/, "");
}

/**
 * Write (upload) data to Azure Blob Storage
 * @param relKey - Relative path/key for the blob
 * @param data - Data to upload (Buffer, Uint8Array, or string)
 * @param contentType - MIME type of the content
 * @returns Object with key and URL of the uploaded blob
 */
export async function azureStoragePut(
  relKey: string,
  data: Buffer | Uint8Array | string,
  contentType = "application/octet-stream"
): Promise<{ key: string; url: string }> {
  const key = normalizeKey(relKey);
  const blobClient = await getBlobClient(key);

  // Convert data to Buffer if it's a string
  const buffer = typeof data === "string" ? Buffer.from(data) : data;

  // Upload the blob with content type
  await blobClient.upload(buffer, buffer.length, {
    blobHTTPHeaders: { blobContentType: contentType },
  });

  return {
    key,
    url: blobClient.url,
  };
}

/**
 * Read (download) data from Azure Blob Storage
 * @param relKey - Relative path/key for the blob
 * @returns Object with key, URL, and content of the blob
 */
export async function azureStorageGet(
  relKey: string
): Promise<{ key: string; url: string; content: Buffer }> {
  const key = normalizeKey(relKey);
  const blobClient = await getBlobClient(key);

  // Download the blob
  const downloadResponse = await blobClient.download();
  
  if (!downloadResponse.readableStreamBody) {
    throw new Error(`Failed to download blob: ${key}`);
  }

  // Convert stream to buffer
  const chunks: Buffer[] = [];
  for await (const chunk of downloadResponse.readableStreamBody) {
    chunks.push(Buffer.from(chunk));
  }
  const content = Buffer.concat(chunks);

  return {
    key,
    url: blobClient.url,
    content,
  };
}

/**
 * Get a signed URL for reading a blob (with read access)
 * @param relKey - Relative path/key for the blob
 * @returns Object with key and signed URL
 */
export async function azureStorageGetUrl(
  relKey: string
): Promise<{ key: string; url: string }> {
  const key = normalizeKey(relKey);
  const blobClient = await getBlobClient(key);

  return {
    key,
    url: blobClient.url,
  };
}

/**
 * Delete a blob from Azure Blob Storage
 * @param relKey - Relative path/key for the blob
 * @returns Object with key indicating deletion success
 */
export async function azureStorageDelete(
  relKey: string
): Promise<{ key: string; deleted: boolean }> {
  const key = normalizeKey(relKey);
  const blobClient = await getBlobClient(key);

  await blobClient.delete();

  return {
    key,
    deleted: true,
  };
}
