import { Base } from "./base.model";

export class Review extends Base {
	value: number;
	producPageId: number;
	constructor(data: any) {
		super(data);
		this.value = data.value;
		this.producPageId = data.producPageId;
	}
}
