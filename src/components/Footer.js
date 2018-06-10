import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        // เปลี่ยนไปใช้ .map เพื่อ loop แล้วใส่เงื่อนไขทีละตัว
        const filters = [
            { value: 'all', label: 'All' },
            { value: 'active', label: 'Active' },
            { value: 'completed', label: 'Completed' },
        ];

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.countActiveItem}</strong> <span>item left</span>
                </span>
                <ul className="filters">
                    {filters.map(filter => (
                        <li>
                          <a
                            className={filter.value === this.props.filter ? 'selected' : ''}
                            onClick={() => this.props.changeCurrentFilter(filter.value)}
                          >
                            {filter.label}
                          </a>
                        </li>
                    ))}
                </ul>
            </footer>
        );
    }
}

export default Footer;