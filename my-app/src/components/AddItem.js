import React, { Component} from 'react';
import ItemModel from '../models/ItemModel';
import Item from './Item';

export default class AddItem extends Component {
    constructor(){
        super();
        this.state = {
            item: new ItemModel()
        }
    }

    static propTypes = {
        onAdd: React.PropTypes.func
    };

    onChange = item => {
        this.setState({item});
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onAdd(this.state.item);

        this.setState({
            item: new ItemModel()
        })
    };

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <Item value={this.state.item} onChange={this.onChange}>
                    <input type="submit" className="btn btn-primary" value="Add Item" />
                </Item>
            </form>
        );
    }
}