/*
	HTML
	----------------------------------- */

	module.exports = function (paths, gulp, plugins) {

		// Child modules
		var assemble = require('assemble');

		// Return module
		return function() {

			// Default page options
			var settings = {
				layout: 'default',
				name: 'default',
				locale: 'en-GB',

				// Appended to includes to bust cache
				timestamp: Date.now()
			};

			// Find layouts and partials
			assemble.layouts(plugins.path.join(paths.html, 'layouts/*.hbs'));
			assemble.partials(plugins.path.join(paths.html, 'partials/*.hbs'));

			// Build templates
			return assemble.src(plugins.path.join(paths.html, '*.hbs'), settings)
				.pipe(plugins.rename({ extname: '.html' }))
				.pipe(assemble.dest(paths.build))
				.pipe(plugins.browserSync.reload({ stream: true }));
		};
	};