import { Base } from "./base.model"
import { Team } from "./team.model"

export class User extends Base {
	user: string
	email: string
	teams: Team[]
}
