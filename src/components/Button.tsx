import { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    operation?: string;
    double?: string;
    triple?: string;
    click?: (value: string) => void;
}

export default function Button({ label, operation, double, triple, click }: ButtonProps) {
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        if (click) {
            click(label);
        }
    };

    return (
        <button onClick={handleClick} className={`${styles.button} ${operation ? styles.operation : ''} ${double ? styles.double : ''} ${triple ? styles.triple : ''}`}>
            {label}
        </button>
    );
}