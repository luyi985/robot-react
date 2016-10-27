import {MOVE,LEFT,RIGHT,REPORT,PLACE} from './constants';
import {fromJS} from 'immutable';


let constrain=5;
let init={
	x:0,
	y:0,
	f:'w'
}


export default function reducer(state=init, action){
	switch (action.type){
		case MOVE:
			console.log(action.type);
			return state;
		case LEFT:
			console.log(action.type);
			return state;
		case RIGHT:
			console.log(action.type);
			return state;
		case REPORT:
			console.log(action.type);
			return state;
		case PLACE:
			console.log(action.type);
			return state;
		default:
			return state;
	}
}