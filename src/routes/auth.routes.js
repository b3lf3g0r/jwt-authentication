/**
 * @fileoverview -
 * @author: b3lf3g0r
 * @version: 1.0.0
 * @since: 2023-02-22
 * */
import express from 'express';

export default class AuthRoutes {
  constructor() {
    this.router = express.Router();
  }

  inti = () =>
    this.router
      .get('/sign-in', this.authPage.bind(this))
      .get('/sign-up', this.authPage.bind(this));

  authPage = (req, res) => {
    return res.render('_auth', {
      title: 'Sign In | Sign Up | JWT Authentication',
      sign_in_message: 'Login to continue.',
      sign_up_message: 'Create an account.',
    });
  };
}
