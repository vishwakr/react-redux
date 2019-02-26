import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import WizardFormFirstPage from './WizardFormFirstPage';
import WizardForm from "./WizardForm";

export const FormContainer = props => {
    const submitForm = (formValues) => {
        console.log('submitting Form: ', formValues);
    }

    return (
        <WizardForm
            formValues={props.formValues}
            change={props.change}
            onSubmit={submitForm}
            handleSubmit={props.handleSubmit}
        />
    );
}

const mapStateToProps = state => ({
    formValues: getFormValues('WizardFormFirstPage')(state),
});
const formConfiguration = {
    form: 'WizardFormFirstPage',
}

export default connect(mapStateToProps)(
    reduxForm(formConfiguration)(FormContainer)
);