import { URLService } from "../services/url.service";

export class URLController {
    public service;
    constructor() {
        this.service = new URLService();
    }

    public async getOne(tinied: string) {
        if (tinied) {
            const url = await this.service.getOne(tinied);

            return url;
        }

        return null;
    }
}
