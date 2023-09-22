import React, { Component} from 'react';
import LaneModel from '../models/LaneModel';
import Item from './Item';
import AddItem from './AddItem';

import ItemButtons from './ItemButtons';

export default class Lane extends Component {
    static propTypes = {
        value: React.PropTypes.instanceOf(LaneModel),
        onChangeLane: React.PropTypes.func.isRequired,
        onRemoveLane: React.PropTypes.func.isRequired,
    };

    onAddItem = item => {
        this.props.onChangeLane(LaneModel.addItem(this.props.value, item));
    };

    onChangeItem = (idx, item) => {
        this.props.onChangeLane(LaneModel.changeItem(this.props.value, idx, item));
    };

    onRemoveLane = e => {
        e.preventDefault();
        this.props.onRemoveLane(this.props.value);
    };

    render() {
        let lane = this.props.value;
        return (
            <div className="lane">
                <button className="btn btn-danger pull-right" onClick={this.onRemoveLane}><i className="glyphicon glyphicon-trash" /></button>
                <h2>{lane.title}</h2>
                {lane.items.map((item, idx) =>
                    <Item key={item.title} value={item} onChange={this.onChangeItem.bind(this, idx)}>
                        <ItemButtons
                            lane={this.props.value}
                            index={idx}
                        />
                    </Item>
                )}

                <AddItem onAdd={this.onAddItem} />
            </div>
        );
    }
}