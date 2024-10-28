import { Base } from "../base";
import { UpsertBillableObjectRequest } from "./types";

export class BillableObjects extends Base {
  upsert(data: UpsertBillableObjectRequest) {
    return this.request(`/api/billable_objects`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
