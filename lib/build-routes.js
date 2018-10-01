'use strict';

const express = require('express');

const { MISSING_ROUTE_MAP_ERROR } = require('../constants/errors');
const router = express.Router();

const buildRoutes = routes => {
    if (!routes) {
        throw 'Routing Error';
    }

    routes.forEach(({ route, content }) => {
        router.get(route, (req, res) => {
            res.send(content);
        });
    });

    return router;
};

module.exports = buildRoutes;