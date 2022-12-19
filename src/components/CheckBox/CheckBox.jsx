import React, { useEffect, useState } from 'react';
// import { logging } from '../../Util/LoggingUtil';
import './CheckBox.module.scss';

const CheckBox = ({
    className,
    size = 'md',
    padding = '0',
    placement = 'left',
    disabled = false,
    checked = false,
    name,
    id,
    onChange,
    children
}) => {
    const [wrapperClasses, setWrapperClasses] = useState('');
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    useEffect(() => {
        let wrapperClasses = `CheckBox -size-${size} -placement-${placement}`;

        if (disabled) {
            wrapperClasses += ' -disabled';
        }

        if (isChecked) {
            wrapperClasses += ' -checked';
        }

        if (className) {
            wrapperClasses += ` ${className}`;
        }

        setWrapperClasses(wrapperClasses);
    }, [placement, children, className, disabled, size, isChecked]);

    const onChangeInput = (event) => {
        // logging.logDebug('CheckBox -> onChangeInput -> event: ', event);

        const newIsCheckedState = !isChecked;

        // logging.logDebug('CheckBox -> onChangeInput -> newIsCheckedState: ', newIsCheckedState);

        setIsChecked(newIsCheckedState);

        if (typeof onChange !== 'undefined') {
            onChange(newIsCheckedState, event);
        }
    };

    const renderAltCheckBox = () => {
        return (
            <span className='-alt-checkbox'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='currentColor' className='-alt-checkmark'>
                    <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'></path>
                </svg>
            </span>
        );
    };

    return (
        <div
            key={`${id}-wrapper`}
            id={`${id}-wrapper`}
            className={wrapperClasses}
            style={{
                padding
            }}
        >
            <div
                className='-inner-wrapper'
            >
                <input
                    type='checkbox'
                    id={id}
                    name={name}
                    onChange={onChangeInput}
                    defaultChecked={isChecked}
                    className='-input'
                    disabled={disabled}
                />

                <label
                    htmlFor={id}
                    className='-label'
                >
                    {renderAltCheckBox()}
                    {children}
                </label>
            </div>
        </div>
    );
};

export default CheckBox;
