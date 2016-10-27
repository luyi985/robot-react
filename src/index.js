//import {Todos} from "./containers/toDoContainer";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './script/store';
import Tabletop from './script/components/Tabletop';

let root= document.getElementById('app');

store.dispatch({type: "MOVE"});

render(
	<Provider store={store}>
		<Tabletop />		
	</Provider>,root
);