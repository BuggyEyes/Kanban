import React, { Component} from 'react';
import LaneModel from '../models/LaneModel';


export default class AddLane extends Component {
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }

    static propTypes = {
        onAddLane: React.PropTypes.func
    };

    onChange = e =>{
        this.setState({title: e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onAddLane(new LaneModel(this.state.title));

        this.setState({title: ''})
    };

    render() {

        return (
            <form onSubmit={this.onSubmit} className="lane">
                <h2>Add New Lane</h2>
                <div className="lane-item">
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" value={this.state.title} name="title" onChange={this.onChange} />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Lane" />
                </div>
            </form>
        );
    }
}