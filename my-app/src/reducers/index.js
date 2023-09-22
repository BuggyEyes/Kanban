import {combineReducers} from 'redux';
import {changeLane, changeItemLane, addLane, removeLane} from '../actions';
import ItemModel from '../models/ItemModel';
import LaneModel from '../models/LaneModel';

let initialState = [
    new LaneModel("Backlog", [
        new ItemModel("Create a New Appointment", "As a user, I would like to create a new appointment"),
        new ItemModel("Remove an existing Appointment", "As a user, I would like to remove an appointment")
    ]),
    new LaneModel('In Progress'),
    new LaneModel('Done')
];


function lanes(state = initialState, action){
    switch (action.type) {
        case changeLane.name:
            let idx = state.findIndex(x => x.title === action.lane.title);
            return [
                ...state.slice(0, idx),
                action.lane,
                ...state.slice(idx + 1)
            ];

        case addLane.name:
            return [...state, action.lane];

        case removeLane.name:
            return state.filter(lane => lane !== action.lane);

        case changeItemLane.name:
            return state.map(lane => {
                if (lane.title === action.oldLane.title){
                    return LaneModel.removeItem(lane, action.item)
                }else if (lane.title === action.newLane.title){
                    return LaneModel.addItem(lane, action.item)
                }else{
                    return lane;
                }
            });

        default:
            return state;
    }
}

export default combineReducers({
    lanes
});