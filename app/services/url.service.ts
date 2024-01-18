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
}
