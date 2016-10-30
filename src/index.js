//import {Todos} from "./containers/toDoContainer";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './script/store';
import {run} from './script/actions';
import TableTopContainer from './script/containers/TableTopContainer';
let root= document.getElementById('app');
render(
	<Provider store={store}>
		<TableTopContainer />		
	</Provider>,root
);

