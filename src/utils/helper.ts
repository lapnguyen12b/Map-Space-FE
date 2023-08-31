import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (imageUrl: string) => {
  try {
   
    const buffer = await fetch(imageUrl).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
   
    const { base64 } = await getPlaiceholder(buffer);
   
    return base64
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.stack)
    }
  }
   
}

export {getBase64}