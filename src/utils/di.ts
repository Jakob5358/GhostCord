import { Service } from "typedi";

function Controller() {
	return function (target: any) {
		Service()(target);
	};
}

export { Service, Controller };
