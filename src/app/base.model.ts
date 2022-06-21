export class Base {
	id: number;
	createdTimestamp: Date;
	lastUpdateTimestamp: Date;
	constructor(data: any) {
		this.id = data.id;
		this.createdTimestamp = data.createdTimestamp;
		this.lastUpdateTimestamp = data.lastUpdateTimestamp;
	}
}
