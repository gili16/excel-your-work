import { saveAs } from "file-saver"; // Correct TypeScript import for file-saver

/**
 * Converts a file from a given URL to a Base64-encoded string.
 * @param url - The URL of the file to convert.
 * @returns A promise that resolves to the Base64-encoded string.
 */
import * as fs from 'fs';


export async function fileToBase64(filepath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                reject(`Error reading file: ${err.message}`);
            } else {
                const base64Encoded = data.toString('base64');
                resolve(base64Encoded);
            }
        });
    });

}

// Usage


/**
 * Downloads a file from a Base64-encoded string.
 * @param EXCEL_FILE_BASE64 - The Base64-encoded file content.
 * @param fileName - The name of the file to save.
 */
export function downloadBase64File(EXCEL_FILE_BASE64: string, fileName: string): void {
  const sliceSize = 1024;
  console.log(EXCEL_FILE_BASE64)
  const byteCharacters = atob(EXCEL_FILE_BASE64.split(",")[1]); // Remove the data URL prefix
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);
    const bytes = new Array(end - begin);

    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }

    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }

  // Use FileSaver.js to trigger the file download
  const blob = new Blob(byteArrays, { type: "application/vnd.ms-excel.sheet.macroEnabled.12" });
  saveAs(blob, `${fileName}.xlsm`); // Save the file with .xlsm extension
}
