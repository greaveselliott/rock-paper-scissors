import React, {Component} from 'react'
import { connect } from 'react-redux';
import { start_game, select_signal_option, decide_winner, restart_game} from '../../logic/actions';

class AI extends Component {
    componentDidMount() {

        var {game_started, selected_symbol, is_revealing, on_dispatch_action, speed } = this.props;

        let ai_actions = [
            start_game(),
            select_signal_option('player'),
            select_signal_option('opponent'),
            decide_winner(),
            restart_game()
        ]
        let dispatch_count = 0;
        let number_of_ai_actions = ai_actions.length;
    
        let interval = setInterval(() => {
            let next_ai_action_index = dispatch_count % number_of_ai_actions;
            let next_ai_action = ai_actions[next_ai_action_index];
    
            on_dispatch_action(next_ai_action)
            dispatch_count++;

            if (next_ai_action_index === number_of_ai_actions) {
                clearInterval(interval);
            }
        }, 3000);
        
    }

    render() {
        return (
            <div className="ai"></div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        on_dispatch_action: (ai_action) => dispatch(ai_action)
    }
}

const mapStateToProps = state => {
    return {
        selected_symbol: state.store.player.selected_symbol,
        game_started: state.store.game_started,
        is_revealing: state.store.is_revealing,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AI);