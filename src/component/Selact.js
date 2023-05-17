import "./Selact.css";

import { useState } from 'react';

import useOutsideClick from "../hook/useOutsideClick";

function Selact({placeholder, data}) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const ref = useOutsideClick(setIsOpen.bind(null, false));

    function handleChange(event) {
        setQuery(event.target.value.toLowerCase());
        setSelectedValue(event.target.value);
    }

    function handleFocus() {
        setIsOpen(true);
    }

    function handleItemClick(event) {
        setSelectedValue(this.label);
        setIsOpen(false);
    }

    return (
        <div className={`selact ${isOpen ? 'selact--open' : ''}`} ref={ref}>
            <div className="selact__head" onClick={handleFocus}>
                <input className="selact__input" type="text" onChange={handleChange} onFocus={handleFocus} placeholder={placeholder} value={selectedValue}/>
                <span className="selact__arrow">〱</span>
            </div>
            <div className="selact__list">
                {data.filter(item => item.label.toLowerCase().indexOf(query) > -1)
                    .map(item => (
                        <li className="selact__item" key={item.value} onClick={handleItemClick.bind(item)}>
                            {item.icon ? <img className="selact__icon" src={item.icon} alt=""/> : ''}
                            <span>{item.label}</span>
                        </li>
                    )
                )}
            </div>
        </div>
    )
}

export default Selact;
