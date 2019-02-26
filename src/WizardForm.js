import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import { Values } from "redux-form-website-template";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>

        <div>
          <WizardFormFirstPage onSubmit={this.nextPage} />
          <Values form = "WizardFormFirstPage"/>
        </div>

        <div>
          <WizardFormSecondPage onSubmit={this.nextPage} />
          <Values form = "WizardFormSecondPage"/>
        </div>

        <WizardFormThirdPage onSubmit={onSubmit}
        />

      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
