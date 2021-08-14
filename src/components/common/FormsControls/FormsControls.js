import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css'

const Element = Element => ({input, meta: {touched, error} , ...props}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? error : "")}>
            <div>
                <Element  {...input} {...props} />
            </div>
            
                { hasError && <span>{error}</span>}
           

        </div>
    )
}

export const TextArea = Element("textarea");
export const Input = Element("input");


export const createField = (placeholder, name, component, validate, props = {}, text = "") => (
            <div><Field placeholder={placeholder} name = {name} component = {component} validate={validate} {...props} />{text} </div>)