import {
  string,
  func,
} from 'prop-types';
import logo from '../../logo.svg';
import React from 'react';
import { Field } from 'redux-form';

import '../../App.scss';
import './AuthenticationCard.scss';

const AuthenticationCard = ({
  // Props
  authenticatedTitle,
  description,
  loginStatus,
  title,
  titleCaption,
  titleLeftButton,
  titleRightButton,
  // Form
  pristine, submitting,
  // Events
  handleSubmit,
}) => (
  <div className='authentication-card__container'>
    <div className='authentication-card__align-center'>
      <img
        src={logo}
        className={loginStatus === 'logging' ? 'app-logo__with-animate':  'app-logo'}
        alt="logo"
      />
    </div>
    <form onSubmit={handleSubmit}>
      <div>
        <div className='margin__left-normal authentication-card__text__title'>
          E-mail address
        </div>
          <Field
            className='authentication-card__input'
            name='username'
            component='input'
            type='text'
            placeholder='ExampleAddress@appman.co.th'
          />
        </div>
      <div>
        <div className='margin__left-normal authentication-card__text__title'>
          Password
        </div>
        <Field
          className='authentication-card__input'
          name='password'
          component='input'
          type='password'
          placeholder='Your password...'
        />
      </div>
      <div className={
        loginStatus === 'failure' ?
        'margin__left-normal authentication-card__text__warning' :
        'margin__left-normal authentication-card__text__success'
        }
      >
        {description}
      </div>
      <div className='authentication-card__align-center'>
        <button
          className={!(pristine || submitting) ?
            'authentication-card__button__authenticate authentication-card__button__authenticate__enable' :
            'authentication-card__button__authenticate authentication-card__button__authenticate__disable'}
          type='submit'
          disabled={pristine || submitting}
        >
          {authenticatedTitle}
        </button>
      </div>
      <div className='margin__top-hard authentication-card__container-row'>
        <div className='authentication-card__align-left'>
          <a className='authentication-card__text__link' href={'/'}>
            {titleLeftButton}
          </a>
        </div>
        <div className='authentication-card__align-right'>
          <a className='authentication-card__text__link' href={'/'}>
            {titleRightButton}
          </a>
        </div>
      </div>
    </form>
  </div>
);

AuthenticationCard.propTypes = {
  // Props
  authenticatedTitle: string,
  description: string,
  loginStatus: string,
  title: string,
  titleCaption: string,
  titleLeftButton: string,
  titleRightButton: string,
  // Handlers
  handleSubmit: func,
};

export default AuthenticationCard;