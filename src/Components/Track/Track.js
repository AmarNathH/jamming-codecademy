import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);

    }

    renderAction() {
        return this.isRemoval ? '-' : '+';
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    {/* <h3><!-- track name will go here --></h3> */}
                    {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                </div>
                <button className="Track-action" onClick={this.props.addTrack}>{this.renderAction()}</button>
            </div>
        );
    }

}