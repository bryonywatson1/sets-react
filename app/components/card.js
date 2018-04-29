import React from 'react';

export default class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className={`cardinner ${this.props.shape} ${this.props.colour} ${this.props.fill} ${this.props.number}`}>
				</div>
			</div>
		);
	}
}
