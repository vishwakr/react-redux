import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';


const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;


function handleChange(e) {
    console.log('hi');
}

const WizardFormFirstPage = props => {
    const { handleSubmit } = props;



    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={"horse.name"}
                type="text"
                component={renderField}
                label="Horse Name"
            />

            <div>
                <label>Is your horse still growing?</label>
                <div>
                    <label>
                        <Field name={"horse.grow"} component="input" type="radio" value="yes" onChange={this.handleChange}/>
                        {' '}
                        Yes
                    </label>
                    <label>
                        <Field name={"horse.grow"} component="input" type="radio" value="no" />
                        {' '}
                        No
                    </label>
                    <Field name={"horse.grow"} component={renderError} />
                </div>
            </div>



            <div>
                <button type="submit" className="next">Next</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true,
    validate,// <------ unregister fields on unmount
})(WizardFormFirstPage);
