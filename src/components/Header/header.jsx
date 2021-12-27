import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const {handleKeyPress} = props;
    const inputnewItem = useRef(null);
    useEffect(() => {
        inputnewItem.current.focus();
    })
    const keyPress = (el) => {
        if (el.key === 'Enter') {
            const text = inputnewItem.current.value;
            if (text.length < 25) {
                handleKeyPress(text)
            }
            else{
                alert("Слшиком большое текст, вводите, не более 25 символов")
            }
            inputnewItem.current.value = '';
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <div className='header-container'>
                <input className="new-todo" placeholder="What needs to be done?"
                       ref={inputnewItem} onKeyPress={keyPress}/>
            </div>
        </header>
    );
};
Header.propTypes = {
    handleKeyPress: PropTypes.func.isRequired,
};
export default Header;
