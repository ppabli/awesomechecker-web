import { Base } from "./base.model";
import { Category } from "./category.model";
import { Team } from "./team.model";

export class Product extends Base {

	name: string;
	description: string;
	teamId: number;
	categoryId: number;

	constructor(data: any) {
		super(data);
		this.name = data.name;
		this.description = data.description;
		this.teamId = data.teamId;
		this.categoryId = data.categoryId;
	}
}
