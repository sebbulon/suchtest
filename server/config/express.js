/**
 * Created by sebastian.weikart on 14/04/2015.
 */
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    path = require('path'),
    passport = require('passport');

module.exports = function (app, config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    };
    // view engine setup
    app.set('views', path.join(config.rootPath, 'server/views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(session({
        secret: 'testtestest',    // TODO replace with persistent session store - REDIS?
        resave: false,
        saveUninitialized: true
    }));

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(path.join(config.rootPath, 'public')));



}
