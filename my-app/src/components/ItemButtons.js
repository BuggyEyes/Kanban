import React, { Component} from 'react';
import {connect} from 'react-redux';
import LaneModel from '../models/LaneModel';
import {changeLane, changeItemLane} from '../actions';

let pd = func => e => {
    e.preventDefault();
    func();
};

class ItemButtons extends Component {
    static propTypes = {
        lanes: React.PropTypes.arrayOf(React.PropTypes.instanceOf(LaneModel)),
        index: React.PropTypes.number,
        lane: React.PropTypes.instanceOf(LaneModel),
        onChangeLane: React.PropTypes.func,
        onChangeItemLane: React.PropTypes.func
    };

    onRemove = pd(() => {
        let {onChangeLane, lane, index} = this.props;
        onChangeLane(LaneModel.removeItem(lane, lane.items[index]))
    });

    onUp = pd(() => {
        let {onChangeLane, lane, index} = this.props;
        onChangeLane(LaneModel.swapItems(lane, index, index -1))
    });

    onDown = pd(() => {
        let {onChangeLane, lane, index} = this.props;
        onChangeLane(LaneModel.swapItems(lane, index, index + 1))
    });

    render() {
        let {index, onChangeItemLane} = this.props;
        let lanes = this.props.lanes.filter(l => l !== this.props.lane);
        let total = this.props.lane.items.length;
        let item = this.props.lane.items[index];

        return (
            <div>
                {!index ? null :
                    <button className="btn btn-default" onClick={this.onUp}><i className="glyphicon glyphicon-arrow-up" /></button> }

                {total <= index + 1 ? null :
                    <button className="btn btn-default" onClick={this.onDown}><i className="glyphicon glyphicon-arrow-down" /></button>}

                <span className="dropdown">
                    <button className="btn btn-default dropdown-toggle">Move to<b className="caret" /></button>
                    <ul className="dropdown-menu">
                        {lanes.map(lane =>
                            <li key={lane.title}><a href="#" onClick={pd(onChangeItemLane.bind(this, this.props.lane, lane, item))}>{lane.title}</a></li>
                        )}
                    </ul>
                </span>

                <button className="btn btn-danger pull-right" onClick={this.onRemove}><i className="glyphicon glyphicon-trash" /></button>
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
        onChangeItemLane: (oldLane, newLane, item) => dispatch(changeItemLane(oldLane, newLane, item))
    })
)(ItemButtons);