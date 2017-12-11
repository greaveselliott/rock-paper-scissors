define([
	'intern!object',
	'intern-visual',
	'require'
], function (
	registerSuite,
	{assertVisuals},
	{toUrl}
) {
	const url = toUrl('http://localhost:3000/');

	const height = 768;
	const width = 1024;

	registerSuite({
		name: 'interaction',

		'entire-page': function () {
			return this.remote
				.get(url)
				.setWindowSize(height, width)

				.takeScreenshot()
				.then(assertVisuals(this, {
					missingBaseline: 'snapshot'
				}))
				.findByCssSelector('.app-loaded')
				.findByCssSelector('.a-button--large')
				.click()
				.takeScreenshot()
				.then(assertVisuals(this, {
					missingBaseline: 'snapshot'
				}))
			}
	});
});