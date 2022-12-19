import React from 'react'
import styles from './Button.module.scss'

const defaultProps = {
    variant: "primary",
    as: "button"
}

function Button({
    variant,
    text,
    onClick,
    href,
    disabled,
    fullwidth,
    children }) {

    function classes() {
        let classes = styles.button

        classes += ' ' + styles[variant]

        if (fullwidth) {
            classes += ' ' + styles.fullwidth
        }

        if (disabled) {
            classes += ' ' + styles.disabled
        }

        return classes
    }

    return (
        <button
            className={classes()}
            disabled={disabled}
            onClick={onClick}>
            <span>
                {text}
            </span>
            {children}
        </button>
    )
}

Button.defaultProps = defaultProps

export default Button
