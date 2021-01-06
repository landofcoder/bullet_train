// 🚫 DEFAULT RAILS INCLUDES
// This section represents the default includes for a Rails 6.0.0-rc1 application. Bullet Train's includes and your own
// includes should be specified at the end of the file, not in this section. This helps avoid merge conflicts in the
// future should the framework defaults change.

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'regenerator-runtime/runtime'
import Rails from "@rails/ujs"
import Turbo from "@hotwired/turbo"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
ActiveStorage.start()

// 🚫 DEFAULT BULLET TRAIN INCLUDES
// This section represents the default settings for a Bullet Train application. Your own includes should be specified
// at the end of the file. This helps avoid merge conflicts in the future, should we need to change our own includes.

global.$ = require('jquery')

require("stylesheets/application.scss")
require("@icon/themify-icons/themify-icons.css")
require("@fortawesome/fontawesome-pro/css/all.css")

// Custom JavaScript for Bullet Train
require("../index")

import 'alpine-turbo-drive-adapter'
import 'alpinejs'
require("alpinejs")

// For inline use in `app/views/account/onboarding/user_details/edit.html.erb`.
import jstz from 'jstz';
global.jstz = require("jstz");

// https://stimulus.hotwire.dev/handbook/installing#controller-filenames-map-to-identifiers
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("../controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

import "controllers"

// ✅ YOUR APPLICATION'S INCLUDES
// If you need to customize your application's includes, this is the place to do it. This helps avoid merge
// conflicts in the future when Rails or Bullet Train update their own default includes.
