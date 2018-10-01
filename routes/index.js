'use strict';

const buildRoutes = require('../lib/build-routes');
const routeMap = require('../constants/routes-map');

module.exports = buildRoutes(routeMap);