'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app;
  const {
    userRequired,
  } = app.middlewares.auth({}, app);

  // home
  router.get('/', userRequired, 'home.index');

  // user
  router.get('/xapi/user', userRequired, 'user.index');
};
