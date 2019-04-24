import Form from 'mobx-react-form';
import dvr from 'validatorjs';

const plugins = { dvr };

const fields = [
	{
		name: 'email',
		label: 'User Email',
		type: 'email',
		rules: 'required|email|string|between:5,25'
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		rules: 'required|string|between:5,25'
	}
];

const options = {
	validateOnChange: true,
	validateOnBlur: false,
	validateOnInit: false
};

export default new Form({ fields }, { plugins, options });
