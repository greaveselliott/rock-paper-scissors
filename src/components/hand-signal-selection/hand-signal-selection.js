import React from 'react'
import './hand-signal-selection.scss';
import HandSignal from '../hand-signal';

const HandSignalSelection = props => {
    return (
        <div className="o-hand-signal-selection">
            {
                props.hand_signals && props.hand_signals.map((value, index) => {
                    return (
                        <div key={value} className="o-hand-signal-selection__column">
                            <HandSignal icon={value} name={value}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default HandSignalSelection;