import { Base } from "../base";
export declare class Accounts extends Base {
    create(data: {
        [key: string]: any;
    }): Promise<unknown>;
    update(data: {
        [key: string]: any;
    }): Promise<unknown>;
}
