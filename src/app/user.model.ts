import { Base } from "./base.model"
import { Rol } from "./rol.model";
import { Team } from "./team.model"
import { UserType } from "./user-type.model";

export class User extends Base {
	user: string;
	email: string;
	teams: Team[];
	roles: Rol[];
	userType: UserType
}
