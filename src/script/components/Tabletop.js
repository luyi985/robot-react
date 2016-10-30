
import React from 'react';
export default class Tabletop extends React.Component{
	constructor(props) {
		super(props);
		this.size=props.state.get('size');
	}
	componentDidMount() {
		this.props.run();
		//this.props.right();
	}
	componentDidUpdate(prevProps, prevState){
    	console.log(this.props.state.getIn(['position','x'])+":"+this.props.state.getIn(['position','y']))
    	$(".cell").removeClass('move-to');
    	$(".cell-"+this.props.state.getIn(['position','x'])+"-"+this.props.state.getIn(['position','y'])).addClass('move-to');
	}
	tableGenerate(){
		let tableCells=[];
		for(let y=0; y<this.size; y++){
			let row=[];
			for(let x=0; x<this.size; x++){
				row.push((<td key={`cell-${x}-${y}`} className={`cell-${x}-${y} cell`}>
							<div className='cell-inner'>
								<i className="fa fa-android" aria-hidden="true"></i>
							</div>
						</td>))
			}
			tableCells.push((<tr key={`row-${y} row`}>{row}</tr>));
		}
		return tableCells;
	}
	render(){
		return (
			<table className="table-top">
				<tbody>
				{(this.tableGenerate.bind(this)())}
				</tbody>
			</table>
		)
	}
}