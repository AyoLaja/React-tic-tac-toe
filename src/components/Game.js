import React, { Component } from 'react'
import Board from './Board'

export default class Game extends Component {
    render() {
        return (
            <div className="game">
                <Board/>
            </div>
        )
    }
}