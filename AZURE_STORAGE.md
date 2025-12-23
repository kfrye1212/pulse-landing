# Azure Blob Storage Integration

This repository includes Azure Blob Storage integration for handling file uploads and downloads.

## Features

The Azure storage module provides the following operations:

- **azureStoragePut** - Upload/write data to Azure Blob Storage
- **azureStorageGet** - Download/read data from Azure Blob Storage
- **azureStorageGetUrl** - Get the URL for a blob
- **azureStorageDelete** - Delete a blob from Azure Blob Storage

## Configuration

To use Azure Blob Storage, you need to set the following environment variables:

```bash
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=youraccountname;AccountKey=youraccountkey;EndpointSuffix=core.windows.net
AZURE_STORAGE_CONTAINER_NAME=uploads
```

### Getting Your Connection String

1. Create an Azure Storage Account in the [Azure Portal](https://portal.azure.com)
2. Navigate to your Storage Account
3. Go to "Access keys" under "Security + networking"
4. Copy the connection string from Key1 or Key2

## Usage Examples

### Upload Data

```typescript
import { azureStoragePut } from "server/azureStorage";

// Upload a string
const result = await azureStoragePut(
  "documents/example.txt",
  "Hello, Azure!",
  "text/plain"
);
console.log(result); // { key: "documents/example.txt", url: "https://..." }

// Upload a Buffer
const buffer = Buffer.from("Hello, Azure!");
const result2 = await azureStoragePut(
  "files/data.bin",
  buffer,
  "application/octet-stream"
);
```

### Download Data

```typescript
import { azureStorageGet } from "server/azureStorage";

const result = await azureStorageGet("documents/example.txt");
console.log(result.content.toString()); // "Hello, Azure!"
console.log(result.url); // The blob URL
```

### Get URL for a Blob

```typescript
import { azureStorageGetUrl } from "server/azureStorage";

const result = await azureStorageGetUrl("documents/example.txt");
console.log(result.url); // The blob URL
```

### Delete a Blob

```typescript
import { azureStorageDelete } from "server/azureStorage";

const result = await azureStorageDelete("documents/example.txt");
console.log(result.deleted); // true
```

## Testing

The test suite can be run with:

```bash
pnpm test
```

Note: Tests that require Azure credentials will be skipped if `AZURE_STORAGE_CONNECTION_STRING` is not set.

## Container Management

The module automatically creates the container specified in `AZURE_STORAGE_CONTAINER_NAME` if it doesn't exist. The default container name is "uploads".

## Error Handling

All functions will throw an error if:
- The Azure connection string is not configured
- The blob operation fails (upload, download, delete)
- Network issues occur

Make sure to wrap calls in try-catch blocks:

```typescript
try {
  const result = await azureStoragePut("file.txt", "data", "text/plain");
  console.log("Upload successful:", result.url);
} catch (error) {
  console.error("Upload failed:", error.message);
}
```
