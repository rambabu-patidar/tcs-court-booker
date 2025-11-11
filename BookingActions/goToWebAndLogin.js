const goToWebAndLogin = async (page, APPLICATION_URL) => {
	await page.goto(APPLICATION_URL);
	console.log(`Opened URL: ${APPLICATION_URL}`);
	await page.fill(".username-field", process.env.BOOKER_USERNAME);
	await page.fill(".password-field", process.env.BOOKER_PASSWORD);
	await page.click(".button.btn.btn-success.btn-large");
	console.log(`Logged in as: ${process.env.BOOKER_USERNAME}`);
};

export default goToWebAndLogin;
