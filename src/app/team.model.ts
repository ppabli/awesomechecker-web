import { Base } from './base.model';

export class Team extends Base {
	name: string
	token: string
	
	constructor(data: any) {
		super(data);
		this.name = data.name;
		this.token= data.token
	}
}
