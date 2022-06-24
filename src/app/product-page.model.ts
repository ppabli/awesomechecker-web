import { Base } from "./base.model";

export class ProductPage extends Base {
	url: string;
	pageId: number;
	productId: number;
	constructor(data: any) {
		super(data);
		this.url = data.url;
		this.pageId = data.pageId;
		this.productId = data.productId;
	}
}
