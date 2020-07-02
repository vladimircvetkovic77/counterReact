import React, {Component} from 'react';

class Counter extends Component {



    state = {
        imageUrl: 'https://picsum.photos/200',
        styles: {
            fontSize: 15,
            fontWeight: 'bold',

        },
        tags: []
    };

    render() {

        const { onIncrement, counter, onDelete, onDecrement  } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-1">
                        <span style={this.state.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
                    <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm m-2">+</button>
                    <button
                        onClick={() => onDecrement(counter)}
                        className="btn btn-secondary btn-sm m-2"
                        disabled={counter.value <= 0}
                    >
                        -
                    </button>
                        {/*
                        <ul>
                            {this.state.tags.length === 0 && "Just Another example of conditional"}
                            {this.renderTags()}
                        </ul>
                        */}
                    <button
                        onClick={ () => onDelete(counter.id) }
                        className="btn btn-danger btn-sm m-2"
                    >
                        Delete
                    </button>

                    </div>
                </div>
            </React.Fragment>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
    }

    getBadgeClasses() {
        let classes = "badge  m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        const zero = 'Zero';
        return value === 0 ? zero : value;
    }
}

export default Counter;

