import { Base } from "./base.model";
import { Team } from "./team.model";

export class Category extends Base {
	name: string;
	description: string;
	teamId: number
	team: Team;
	constructor(data: any) {
		super(data);
		this.name = data.name;
		this.description = data.description;
		this.teamId = data.teamId;
		this.team = new Team(data.team);
	}
}
