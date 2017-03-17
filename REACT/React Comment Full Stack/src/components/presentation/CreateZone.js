import React, {Component} from 'react'



class CreateZone extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	zone:{

	  	}
	  }
	}

	updateZone(event){
		let updated = Object.assign({}, this.state.zone);
		updated[event.target.id] = event.target.value;
		this.setState({
			zone: updated
		})
	}

	submitZone(event){
		console.log("submitZone: " + JSON.stringify(this.state.zone));
		let updated = Object.assign({}, this.state.zone);
		updated['zipCodes'] = updated.zipCode.split(',');
		this.props.onCreate(updated);
	}


	render(){
		return(
			<div>
				<h1>CreateZone</h1>
				<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/>
				<input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="ZipCodes"/>
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit</button>
				
			</div>
		)
	}
}

export default CreateZone