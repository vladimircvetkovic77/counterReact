import React, {Component}from 'react';
import './App.css';
import Counters from './components/reusable/counters.jsx'
import Navigation from './components/reusable/navigation.jsx';
import Movies from "./components/movies";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 6},
            {id: 3, value: 0},
            {id: 4, value: 3},
            {id: 5, value: 0},
        ]
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter((counter) => counter.id !== counterId );
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
        this.blurButton();
    }

    handleIncrement = counter => {
        //clone counters object from state
        const counters = [...this.state.counters];
        //determine which item of the object has changed
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
        this.blurButton();
    }

    handleDecrement = (counter) => {
        //clone counters object from state
        const counters = [...this.state.counters];
        //determine which item of the object has changed
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
        this.blurButton();
    }

    blurButton = () => {
        setTimeout(() => document.activeElement.blur(), 300);
    }
    render() {
        return (
            <main className="container" style={{margin: 50}}>
                {/*
                <Navigation
                 activeCounters={this.state.counters.filter(c => c.value > 0).length}

                 />
                 <Counters
                 onDelete={this.handleDelete}
                 onIncrement={this.handleIncrement}
                 onDecrement={this.handleDecrement}
                 onReset={this.handleReset}
                 counters={this.state.counters}

                 />
                 */}
                 <Movies/>
            </main>
        );
    }
}

export default App;
