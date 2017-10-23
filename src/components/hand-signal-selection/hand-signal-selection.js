import React from 'react'
import './hand-signal-selection.scss';
import HandSignal from '../hand-signal';

const HandSignalSelection = props => {
    return (
        <div className="o-hand-signal-selection">
            {
                props.hand_signals && props.hand_signals.map((value, index) => {
                    return (
                        <HandSignal 
                            key={value} 
                            icon={value} 
                            name={value} 
                            is_selected={true}
                            is_human={false}
                            has_won={true}
                            is_hidden={false}    
                        />
                    )
                })
            }
        </div>
    );
}

export default HandSignalSelection;