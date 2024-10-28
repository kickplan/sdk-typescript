import { Base } from "../base";
import { UpsertBillableObjectRequest } from "./types";
export declare class BillableObjects extends Base {
    upsert(data: UpsertBillableObjectRequest): Promise<unknown>;
}
