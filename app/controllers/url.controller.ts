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

    public async postOne(shorten: string, longUrl: string) {
        const alreadyCreated = await this.service.getOneByURL(longUrl);
        if (alreadyCreated) {
            return alreadyCreated;
        }

        const newUrlShorten = await this.service.postOne(shorten, longUrl);
        return newUrlShorten;
    }
}
