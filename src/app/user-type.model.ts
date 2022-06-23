import { Base } from "./base.model";

export class UserType extends Base {
	name: string;
	description: string;
	token: string;
	maxRequests: number;
}
