import { Base } from "./base.model";

export class Product extends Base {
	name: string;

	constructor(data: any) {
		super(data);
		this.name = data.name;
	}
}
