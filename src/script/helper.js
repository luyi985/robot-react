import {Map} from 'immutable';

let fallingCheck = (size, v) => {
	return v<0||v>size-1;
}


export function moveHelp(size,x,y,facing){
	let currentPosition = Map({
			x,
			y,
			facing
		})
	switch (facing){
		case 'N':
			return fallingCheck(size,y-1)?currentPosition:Map({
							x 		: 	x,
							y 		: 	y-1,
							facing	: 	'N'
						})
		case 'S':
			return fallingCheck(size,y+1)?currentPosition:Map({
							x 		: 	x,
							y 		: 	y+1,
							facing	: 	'S'
						})
		case 'W':
			return fallingCheck(size,x-1)?currentPosition:Map({
							x 		: 	x-1,
							y 		: 	y,
							facing	: 	'W'
						})
		case 'E':
			return fallingCheck(size,x+1)?currentPosition:Map({
							x 		: 	x+1,
							y 		: 	y,
							facing	: 	'E'
						})
		default:
			return currentPosition;
	}
}




export function leftHelp(size,x,y,facing){
	let currentPosition = Map({
			x,
			y,
			facing
		})
	switch (facing){
		case 'N':
			return fallingCheck(size,x-1)?currentPosition:Map({
							x 		: 	x-1,
							y 		: 	y,
							facing	: 	'W'
						})
		case 'S':
			return fallingCheck(size,x+1)?currentPosition:Map({
							x 		: 	x+1,
							y 		: 	y,
							facing	: 	'E'
						})
		case 'W':
			return fallingCheck(size,y+1)?currentPosition:Map({
							x 		: 	x,
							y 		: 	y+1,
							facing	: 	'S'
						})
		case 'E':
			return fallingCheck(size,y-1)?currentPosition:Map({
							x 		: 	x,
							y 		: 	y-1,
							facing	: 	'N'
						})
		default:
			return currentPosition;
	}
}




export function rightHelp(size,x,y,facing){
	let currentPosition = Map({
			x,
			y,
			facing
		})
	switch (facing){
		case 'N':
			return fallingCheck(size,x+1)?currentPosition:Map({
							x 		: 	x+1,
							y 		: 	y,
							facing	: 	'E'
						})
		case 'S':
			return fallingCheck(size,x-1)?currentPosition:Map({
							x 		: 	x-1,
							y 		: 	y,
							facing	: 	'W'
						})
		case 'W':
			return fallingCheck(size,y-1)?currentPosition:Map({
							x 		: 	x,
							y 		: 	y-1,
							facing	: 	'N'
						})
		case 'E':
			return fallingCheck(size,y+1)?currentPosition:Map({
							x 		: 	x,
							y 		: 	y+1,
							facing	: 	'S'
						})
		default:
			return currentPosition;
	}
}