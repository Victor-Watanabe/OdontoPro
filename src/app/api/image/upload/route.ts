import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME as string,
  api_key: process.env.CLOUDINARY_KEY as string,
  api_secret: process.env.CLOUDINARY_SECRET as string,
});

export const POST = async (request: Request) => {
  const formData = await request.formData();

  const file = formData.get("file") as File;
  const UserId = formData.get("userId") as string;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  if (!UserId || UserId === "") {
    return NextResponse.json(
      { error: "Falha ao Alterar Imagem" },
      { status: 401 },
    );
  }

  if (file.type !== "image/png" && file.type !== "image/jpeg") {
    return NextResponse.json(
      { error: "Formato de imagem Inválida" },
      { status: 400 },
    );
  }

  const results = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: [`${UserId}`],
          public_id: file.name,
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        },
      )
      .end(buffer);
  });

  return NextResponse.json(results);
};
