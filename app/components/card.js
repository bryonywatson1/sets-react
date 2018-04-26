import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className={`cardinner ${this.props.shape} ${this.props.colour} ${this.props.fill} ${this.props.number}`}>
                {/* <div className="colour">
                        {this.props.colour}
                    </div>
                    <div className="symbol">
                        {this.props.symbol}
                    </div>
                    <div className="fill">
                        {this.props.fill}
                    </div>
                    <div className="number">
                        {this.props.number}
                    </div> */}
                </div>
            </div>
        );
    }
}
