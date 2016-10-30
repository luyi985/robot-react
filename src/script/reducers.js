import {MOVE,LEFT,RIGHT,REPORT,PLACE} from './constants';
import {fromJS} from 'immutable';
import {moveHelp,leftHelp,rightHelp} from './helper';


let constrain=5;
let init=fromJS({
	size: constrain,
	position:{
		x:0,
		y:0,
		facing:'E'	
	}
});


export default function reducer(state=init, action){
	switch (action.type){
		case MOVE:
			console.log(action.type);
			return state.set('position',moveHelp(state.get('size'),
													state.getIn(['position','x']),
														state.getIn(['position','y']),
															state.getIn(['position','facing'])
												));
		case LEFT:
			console.log(action.type);
			return state.set('position',leftHelp(state.get('size'),
													state.getIn(['position','x']),
														state.getIn(['position','y']),
															state.getIn(['position','facing'])
												));
		case RIGHT:
			console.log(action.type);
			return state.set('position',rightHelp(state.get('size'),
													state.getIn(['position','x']),
														state.getIn(['position','y']),
															state.getIn(['position','facing'])
												));
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