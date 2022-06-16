import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
	renderInput({ input, label }) {
		return (
			<div className='field'>
				<label>{label}</label>
				<input {...input} />
			</div>
		);
	}

	onSubmit(formValues) {}

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className='ui form'
			>
				<Field name='title' component={this.renderInput} label='Title' />
				<Field
					name='description'
					component={this.renderInput}
					label='Description'
				/>
				<button className='ui button primary'>Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		// only ran if user didnt enter a title
		errors.title = "You cannot leave title blank";
	}

	if (!formValues.description) {
		errors.description = "You cannot leave description blank";
	}

	return errors;
};

export default reduxForm({
	form: "streamCreate",
	validate,
})(StreamCreate);
