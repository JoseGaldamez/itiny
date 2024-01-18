import { NextApiRequest, NextApiResponse } from "next";

import { URLController } from "@/app/controllers/url.controller";

const controllerURL = new URLController();

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const urlTinied = request.query["urlTinied"] as string;

    if (urlTinied) {
        try {
            const result = await controllerURL.getOne(urlTinied);
            response.status(200).json(result);
        } catch (error) {
            response.status(400).json({ error: "Server Error: " + error });
        }
    }

    response.status(400).json({ error: "Invalid Param" });
}
