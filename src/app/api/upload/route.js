// import crypto from "crypto";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file");
//     let fileName = formData.get("fileName");

//     if (!file || !fileName) {
//       return Response.json({
//         success: false,
//         error: "Missing file or fileName",
//       });
//     }

//     fileName = `${fileName}_photo_${Date.now()}.jpg`; // Dynamic file name

//     // Convert file (Blob) to Buffer
//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     // Generate SHA1 hash of the file
//     const sha1 = crypto.createHash("sha1").update(buffer).digest("hex");

//     // Set headers
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/octet-stream");
//     myHeaders.append("X-Bz-File-Name", fileName);
//     myHeaders.append("X-Bz-Content-Sha1", sha1); // ✅ Use dynamically generated SHA1
//     myHeaders.append(
//       "Authorization",
//       "4_005c12700d9b6780000000001_01ba4c80_452ecd_upld_fYVZQclVyc3sWUdupl4279hyzF0="
//     );

//     // Request options
//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: buffer, // ✅ Send actual file buffer
//       redirect: "follow",
//     };

//     const response = await fetch(
//       "https://pod-050-1016-12.backblaze.com/b2api/v3/b2_upload_file/7cf112b710509d799b460718/c005_v0501016_t0032",
//       requestOptions
//     );

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.message || "Upload failed");
//     }

//     console.log("Upload successful:", result);
//     // Step 2: Generate the public URL
//     const bucketName = "bucket1-mywebsite-static-assets-folder"; // Replace with your actual bucket name
//     const publicUrl = `https://f005.backblazeb2.com/file/${bucketName}/${fileName}`;
//     return Response.json({ success: true, fileUrl: publicUrl });
//     // return Response.json({ success: true,   });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     return Response.json({ success: false, error: error.message });
//   }
// }

import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";

const SCOPES = ["https://www.googleapis.com/auth/drive.file"];
const KEY_FILE_PATH = "service-account.json"; // Ensure this file is in your project root
const FOLDER_ID = "1uXDi0HJ-XPg-Sqx3jHvqH7FF0wDM7aLf"; // Your Google Drive Folder ID

async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: SCOPES,
  });
  return auth.getClient();
}

export async function POST(req) {
  try {
    // Get formData from request
    const formData = await req.formData();
    const file = formData.get("file"); // Extract file (Blob)
    const fileName = formData.get("fileName") || file.name; // Extract filename or use original

    if (!file)
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    // Convert Blob to a Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Convert Buffer to a Readable Stream (needed for Google Drive API)
    const fileStream = Readable.from(fileBuffer);

    const authClient = await authenticate();
    const drive = google.drive({ version: "v3", auth: authClient });

    // Upload file to Google Drive
    const fileMetadata = { name: fileName, parents: [FOLDER_ID] };
    const media = { mimeType: file.type, body: fileStream };

    const uploadedFile = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id",
    });

    // Make file public
    await drive.permissions.create({
      fileId: uploadedFile.data.id,
      requestBody: { role: "reader", type: "anyone" },
    });

    // Generate public file URL
    // const fileUrl = `https://drive.google.com/uc?id=${uploadedFile.data.id}`;
    const fileUrl = `https://lh3.googleusercontent.com/d/${uploadedFile.data.id}=w1000`;

    return NextResponse.json({ success: true, url: fileUrl });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
