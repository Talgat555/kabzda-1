import React from 'react';
import styles from './formsControls.module.css'



export const Input = ({input, meta, props}) => {

    const hasError = meta.touched && meta.error;

    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <input {...props} {...input} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
};