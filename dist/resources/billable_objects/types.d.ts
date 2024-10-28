export declare interface BillableObject {
    external_id: string;
    external_type: string;
    account_key: string;
    properties: Record<string, any>;
}
export declare interface UpsertBillableObjectRequest {
    external_id: string;
    external_type: string;
    account_key: string;
    properties?: Record<string, any>;
}
