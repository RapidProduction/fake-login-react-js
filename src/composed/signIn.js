import {
  compose,
  withState,
  withHandlers,
  withProps,
} from 'recompose';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { login } from '../libs/session-handler';
import AuthenticationCard from '../components/AuthenticationCard';

export default compose(
  withRouter,
  // Login status could be default, failure, logging, success
  withState('loginStatus', 'setLoginStatus', 'default'),
  withState('description', 'setDescription', ''),
  withProps({
    authenticatedTitle: 'Sign In',
    title: 'Log In',
    titleLeftButton: 'Create new account',
    titleRightButton: 'Forgot Password?',
  }),
  withHandlers({
    onSubmit: props => formValues => {
      const username = formValues.username ? formValues.username.trim() : null;
      const password = formValues.password ? formValues.password.trim() : null;
      if(username !== null && password !== null) {
        props.setLoginStatus('logging');
        props.setDescription('');
        login(formValues.username, formValues.password)
          .then(() => {
            props.setLoginStatus('success');
            props.setDescription('You are logged-in.');
          })
          .catch((error) => {
            props.setLoginStatus('failure');
            props.setDescription(error.detail);
          })
      }
      else {
        props.setLoginStatus('default');
        props.setDescription('Please fill your email or password');
      }
    },
  }),
  reduxForm({ form: 'signIn' }),
)(AuthenticationCard);