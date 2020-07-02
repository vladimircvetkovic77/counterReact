import React from 'react';

const Navigation = ({activeCounters}) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                    className="navbar-brand"
                    href="#"
                >
                    Number of active counters: {activeCounters}
                </a>
            </nav>
        </div>
    );
}

export default Navigation;
