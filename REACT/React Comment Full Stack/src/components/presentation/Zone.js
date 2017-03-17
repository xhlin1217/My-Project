import React, {Component} from 'react';
import styles from './styles.js'

class Zone extends Component {
	onSelectTitle(event){
		event.preventDefault();
		console.log('onSelectTitle: ' + this.props.index);
		this.props.select(this.props.index);
	}

	
	render(){
		const zoneStyle = styles.zone;
		const currentObj = this.props.currentZone;
		const zipCode = currentObj.zipCodes[0];
		const title = (this.props.isSelected) ? <a style={zoneStyle.title} href="#">{currentObj.name}</a> : <a href="#">{currentObj.name}</a>;
		return (
			<div style={zoneStyle.container}>
				<h2 onClick={this.onSelectTitle.bind(this)} style = {zoneStyle.header}>
					{title}
				</h2>
				<span className='detail'>{zipCode}</span><br/>
				<span className='detail'>{currentObj.numComments} comments</span>
			</div>
		)
	}
}

export default Zone;