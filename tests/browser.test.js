const { Builder, By, until } = require('selenium-webdriver');
const { iteratee } = require('underscore');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

// Säkerställ att Firefox är igång med asynkront anrop
beforeAll(async () => {
	console.log(fileUnderTest);
		driver = await new Builder().forBrowser('firefox').build();
		await driver.get(fileUnderTest);
	});

// Avslutar Firefox med asynkront anrop
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

// Själva testet
test('The stack should be empty when popping from stack in the beginning', async () => {
	let stack = await driver.findElement(By.id('top_of_stack')).getText();
	expect(stack).toEqual("n/a") // Åtgärdat, istället för undefined ska det vara 'n/a'
});
