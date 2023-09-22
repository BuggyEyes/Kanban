export function addLane(lane) { return  {type: addLane.name, lane}}

export function removeLane(lane) { return  {type: removeLane.name, lane}}

export function changeLane(lane) { return  {type: changeLane.name, lane}}

export function changeItemLane(oldLane, newLane, item) { return  {type: changeItemLane.name, oldLane, newLane, item}}