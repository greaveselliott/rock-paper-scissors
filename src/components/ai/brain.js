import React, {Component} from 'react'
import { connect } from 'react-redux';
import { select_signal_option, decide_winner, restart_game} from '../../logic/actions';

class Brain extends Component {
    
    run_time;

    componentDidMount() {

        const { on_dispatch_action } = this.props;

        let ai_actions = [
            {
                name: [select_signal_option('player'), select_signal_option('opponent')],
                delay: 0
            },
            {
                name: decide_winner(),
                delay: 0
            },
            {
                name: restart_game(),
                delay: 1500
            }
        ];

        let dispatch_count = 0;
        
        this.run_time = setInterval(() => {
            let next_ai_action = ai_actions[dispatch_count % ai_actions.length];
            
            if (next_ai_action.name.length > 1) {
                // concurrent dispatchers
                next_ai_action.name.forEach(function(ai_action) {
                    on_dispatch_action(ai_action, next_ai_action.delay);
                });
            } else if ( next_ai_action.length === undefined ) {
                // linear dispatchers
                on_dispatch_action(next_ai_action.name, next_ai_action.delay);
            }
            dispatch_count++;

        }, 1750);
    }

    componentWillUnmount() {
        clearInterval(this.run_time);
    }

    render() {
        return (
            <div className="ai__brain">{/* This AI's brain is pretty empty. */}</div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        on_dispatch_action: (ai_action, delay) => {
            setTimeout(()=> {
                dispatch(ai_action);
            }, delay);
        }
    }
}

export default connect(null, mapDispatchToProps)(Brain);