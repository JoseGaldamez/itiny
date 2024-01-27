import { NextApiRequest, NextApiResponse } from "next";
import { URLController } from "@/app/controllers/url.controller";
import ShortUniqueId from "short-unique-id";

const controllerURL = new URLController();
const uid = new ShortUniqueId({ length: 6 });

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    switch (request.method) {
        case "GET":
            await getUrl(request, response);
            break;
        case "POST":
            await postUrl(request, response);
            break;
        default:
            response.status(400).json({ error: "Invalid Param" });
            break;
    }
}

const getUrl = async (request: NextApiRequest, response: NextApiResponse) => {
    const urlTinied = request.query["urlTinied"] as string;

    if (urlTinied) {
        try {
            const result = await controllerURL.getOne(urlTinied);
            response.status(200).json(result);
        } catch (error) {
            response.status(400).json({ error: "Server Error: " + error });
        }
    }
};

const postUrl = async (request: NextApiRequest, response: NextApiResponse) => {
    const urlShorten = uid.rnd();
    const { url } = await JSON.parse(request.body);

    if (url) {
        try {
            const result = await controllerURL.postOne(urlShorten, url);
            response.status(201).json(result);
        } catch (error) {
            response.status(400).json({ error: "Server Error: " + error });
        }
    }
};
