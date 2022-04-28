import React, {FC} from 'react';
import styles from './button.module.scss'


interface ButtonProps{
    text: string;
    type: 'button' | 'submit' | 'reset';
    handleClick?: (e: React.MouseEvent) => any;
    background: 'red' | 'blue' | 'simple'
}

const Button: FC<ButtonProps> = ({text, type, handleClick, background}) => {
    return (
        <button
            className={background === 'red' ?
                styles.buttonRed : background === 'blue' ?
                    styles.buttonBlue : styles.buttonSimple}
            type={type}
            onClick={handleClick}
        >
            {text}
        </button>)
};

export default Button;