import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React Kanban</h2>
                </div>
                <Board />
            </div>
        );
    }
}

export default App;