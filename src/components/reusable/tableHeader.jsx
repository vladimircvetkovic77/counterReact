import React, {Component} from 'react';

class TableHeader extends Component {

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc')
                ? 'desc'
                : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    renderSortIcon = column => {

        const { sortColumn} = this.props;

        if  (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
        return <i className="fa fa-sort-desc"></i>;

    }

    render() {
        return (
            <thead className="">
                <tr>
                    {this.props.columns.map((column) =>
                        <th
                            key={(column.path) ? column.path : column.key}
                            onClick={() => this.raiseSort(column.path)}
                            style={{cursor: 'pointer', userSelect: 'none'}}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    )}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
