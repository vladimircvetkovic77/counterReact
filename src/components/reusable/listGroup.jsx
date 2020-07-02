import React from 'react';

function ListGroup({items, valueProperty, textProperty, onItemSelect, selectedItem}) {
    return (
        <div>
            <ul className="list-group">
                {items.map((item) => {
                    return <li
                        onClick={() => onItemSelect(item)}
                        key={item[valueProperty]}
                        className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                        style={{cursor: 'pointer', userSelect: 'none'}}>{item[textProperty]}</li>;
                    }
                )}
            </ul>
        </div>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'

}

export default ListGroup;
