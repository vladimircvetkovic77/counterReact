import React, {Component} from 'react';
import Counter from './counter.jsx'

class Counters extends Component {

    render() {

        const {onDelete, onReset, onIncrement, counters, onDecrement} = this.props;

        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >Reset
                </button>
                {counters.map(counter =>
                    <Counter
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        key={counter.id}
                        counter={counter}
                    >
                        <h6>Counter # {counter.id}</h6>
                    </Counter>
                )}
            </div>
        );

    }

}

export default Counters;
