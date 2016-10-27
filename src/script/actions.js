import {MOVE,LEFT,RIGHT,REPORT,PLACE} from './constants';



export function move(){
	return {
		type: MOVE
	}
}

export function left(){
	return {
		type: LEFT
	}
}

export function right(){
	return {
		type: RIGHT
	}
}


export function report(){
	return {
		type: REPORT
	}
}

export function place(){
	return {
		type: PLACE
	}
}