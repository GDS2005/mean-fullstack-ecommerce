export interface Product {
    name: string;
    url: string;
}

export interface ProductResults {
    count: number;
    next: string;
    previous?: string;
    result: Product[]
}
