import { chromium } from "playwright";
import dotenv from "dotenv";

import goToWebAndLogin from "./BookingActions/goToWebAndLogin.js";
import getDateForBooking, {
	bookingDateWeekDayNumber,
} from "./BookingActions/getDateForBooking.js";
import showAppointments from "./BookingActions/showAppointments.js";
import chooseTimeSlot from "./BookingActions/chooseTimeSlot.js";
import pickPlayer from "./BookingActions/pickPlayer.js";
import saveCatpchaAndBook from "./BookingActions/solveCaptchaAndBook.js";

dotenv.config();

const APPLICATION_URL = process.env.APPLICATION_URL;

async function bookCourt() {
	const browser = await chromium.launch({
		headless: !process.env.SHOW_BROWSER,
		slowMo: +process.env.SLOW_MO || 50,
	});
	const page = await browser.newPage();

	try {
		await goToWebAndLogin(page, APPLICATION_URL);
		const bookingDate = await getDateForBooking();
		// hardcoding for now
		//const bookingDate = "11/11/2025";
		await showAppointments(page, bookingDate, bookingDateWeekDayNumber);
		await chooseTimeSlot(page, bookingDate);

		const isBooker = true;
		await pickPlayer(page, process.env.BOOKER_PLAYER_NAME, isBooker);
		await pickPlayer(page, process.env.SECOND_PLAYER_NAME, false);

		await saveCatpchaAndBook(page);
	} catch (error) {
		console.error("An Error Occurred:", error);
	} finally {
		await browser.close();
	}
}
bookCourt();
