import React, { Component} from 'react';
import ItemModel from '../models/ItemModel';

export default class Item extends Component {
    static propTypes = {
        value: React.PropTypes.instanceOf(ItemModel),
        onChange: React.PropTypes.func
    };

    onChange = e => {
        let item = Object.assign(new ItemModel(), this.props.value);
        let name = e.target.name;
        item[name] = e.target.value;

        this.props.onChange(item);
    };

    render() {
        let item = this.props.value;
        return (
            <div className="lane-item">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={item.title} name="title" onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={item.description} name="description" onChange={this.onChange} />
                </div>
                {this.props.children}


            </div>
        );
    }
}