const config = require('../webpack.config');

module.exports = (baseConfig, env, defaultConfig) => {
	// configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// You can change the configuration based on that.
	// 'PRODUCTION' is used when building the static version of storybook.

	// Make whatever fine-grained changes you need
	defaultConfig.module.rules.push(...config.module.rules);

	// Return the altered config
	return defaultConfig;
};
