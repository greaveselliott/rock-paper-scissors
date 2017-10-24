import React, { Component } from 'react'
import Brain from './brain';
import { connect } from 'react-redux';

class AI extends Component {
    render() {
        let { is_ai_playing } = this.props;

        return (
            <div className="ai">
                {/* Brain transportation device */}
                { is_ai_playing && <Brain/> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        is_ai_playing: state.store.game_started && state.store.player.is_human === false 
    };
};

export default connect(mapStateToProps)(AI);