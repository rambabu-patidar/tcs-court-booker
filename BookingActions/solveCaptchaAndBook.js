import tesseract from "tesseract.js";

const saveCatpchaAndBook = async (page) => {
	// Select the image from the cptcha and take a screenshot
	const imageSelector = `img[alt="Captcha"]`;
	await page.waitForSelector(imageSelector, { state: "visible" });
	const elementHandle = await page.$(imageSelector);
	await elementHandle.screenshot({ path: "captcha.jpeg" });
	console.log("Captcha screenshot saved as captcha.jpeg");

	// read the image and generate text using tesseract
	const {
		data: { text },
	} = await tesseract.recognize("captcha.jpeg", "eng");
	const firstNumber = text.split("+")[0].trim();
	const secondNumber = text.split("+")[1].split("=")[0].trim();
	const captchaResult = parseInt(firstNumber) + parseInt(secondNumber);
	console.log(
		`Captcha solved: ${firstNumber} + ${secondNumber} = ${captchaResult}`
	);
	await page.fill("#Captcha", captchaResult.toString());

	// Click on Book button.
	if (!process.env.TESTING) await page.click("#btnSave");
};

export default saveCatpchaAndBook;
