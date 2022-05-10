import { Shoplist } from "./shoplist.model";

export class shoplist {
    constructor(
        public shoplist: Shoplist,
        public shopName:string,
        public latitude: number,
        public longitude: number,
        public openTimes: string,
        ) {}
}