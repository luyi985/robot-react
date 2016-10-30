import React from 'react';
import {fromJS} from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {move,left,right,report,place,run} from '../actions';
import Tabletop from '../components/Tabletop';



let TableTopContainer= connect(
	function mapStatToProps(state){
		return {
			state: state
		};
	},
	function mapDispatchToProps(dispatch) {
		return {
			move: bindActionCreators(move, dispatch),
			left: bindActionCreators(left, dispatch),
			right: bindActionCreators(right, dispatch),
			report: bindActionCreators(report, dispatch),
			place: bindActionCreators(place,dispatch),
			run: bindActionCreators(run,dispatch),
		}
  	}
)(Tabletop);

export default TableTopContainer;