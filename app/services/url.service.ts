import prisma from "../lib/prisma";

export class URLService {
    private provider;

    constructor() {
        this.provider = prisma;
    }

    public async getOne(tinied: string) {
        const url = await this.provider.tiniesURL.findUnique({
            where: {
                tinied: tinied,
            },
        });

        return url;
    }
    public async getOneByURL(longUrl: string) {
        const url = await this.provider.tiniesURL.findUnique({
            where: {
                url: longUrl,
            },
        });

        return url;
    }

    public async postOne(shorten: string, longUrl: string) {
        const url = await this.provider.tiniesURL.create({
            data: { tinied: shorten, url: longUrl },
        });
        return url;
    }
}
