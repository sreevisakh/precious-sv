'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://test-sreevisakh.rhcloud.com',
  SESSION_SECRET: "precious-secret",

  FACEBOOK_ID: '724118834346168',
  FACEBOOK_SECRET: 'd40627444037ba8d49e62bff424908d7',

  TWITTER_ID: 'app-id',
  TWITTER_SECRET: 'secret',

  GOOGLE_ID: 'app-id',
  GOOGLE_SECRET: 'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
