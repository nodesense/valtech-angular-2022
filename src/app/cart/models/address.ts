// interface for type compatiblity, to match with js object

export interface Address {
    city: string;
    state: string;
    pincode?: number; // ? means optional
}
