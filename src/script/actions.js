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



function select(){
	let list=[];
	list.push(MOVE);
	list.push(LEFT);
	list.push(RIGHT);
	return list[Math.floor(Math.random()*list.length)];
}

export function run(){
	var time=null;
	return (dispatch,getState)=>{
		 time= setInterval(function(){
		 	dispatch({type: select()});
		 },500)
	}
}
