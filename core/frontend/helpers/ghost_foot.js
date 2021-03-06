// # Ghost Foot Helper
// Usage: `{{ghost_foot}}`
//
// Outputs scripts and other assets at the bottom of a Ghost theme
const {SafeString, settingsCache} = require('../services/proxy');
const _ = require('lodash');

// We use the name ghost_foot to match the helper for consistency:
module.exports = function ghost_foot(options) { // eslint-disable-line camelcase
    const foot = [];

    const globalCodeinjection = settingsCache.get('ghost_foot');
    const postCodeinjection = options.data.root && options.data.root.post ? options.data.root.post.codeinjection_foot : null;

    if (!_.isEmpty(globalCodeinjection)) {
        foot.push(globalCodeinjection);
    }

    if (!_.isEmpty(postCodeinjection)) {
        foot.push(postCodeinjection);
    }

    return new SafeString(foot.join(' ').trim());
};
