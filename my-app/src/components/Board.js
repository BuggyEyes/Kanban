import React, { Component} from 'react';
import {connect} from 'react-redux';
import LaneModel from '../models/LaneModel';
import Lane from './Lane';
import AddLane from './AddLane';
import {changeLane, addLane, removeLane} from '../actions';

class Board extends Component {
    static propTypes = {
        lanes: React.PropTypes.arrayOf(React.PropTypes.instanceOf(LaneModel)).isRequired,
        onAddLane: React.PropTypes.func.isRequired,
        onRemoveLane: React.PropTypes.func.isRequired,
        onChangeLane: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <div>
                {this.props.lanes.map(lane =>
                    <Lane key={lane.title}
                          value={lane}
                          onChangeLane={this.props.onChangeLane}
                          onRemoveLane={this.props.onRemoveLane} />
                )}

                <AddLane onAddLane={this.props.onAddLane}/>

            </div>
        );
    }
}

export default connect(
    state => ({
        lanes: state.lanes
    }),
    dispatch => ({
        onChangeLane: lane => dispatch(changeLane(lane)),
        onRemoveLane: lane => dispatch(removeLane(lane)),
        onAddLane: lane => dispatch(addLane(lane))
    })
)(Board);