const showAppointments = async (
	page,
	bookingDate,
	bookingDateWeekDayNumber
) => {
	// fill the date
	if (bookingDateWeekDayNumber != 6) {
		await page.click(".ui-datepicker-trigger");
		// if the month is changed for next week booking we need to go to next month calender
		// so that it renders that element.
		const today = new Date();
		const currentMonth = today.getMonth();
		if (+bookingDate.split("/")[1] != currentMonth) {
			// we need to click on calender so that it renders the next month dates.
			await page.click(".ui-datepicker-next");
		}

		await page.evaluate((bookingDate) => {
			const getBookingDateElement =
				window.document.getElementsByClassName("ui-state-default")[
					bookingDate.split("/")[0] - 1
				];
			return getBookingDateElement.click();
		}, bookingDate);
	}

	// fill activity
	await page.selectOption("select#Activity", `${process.env.ACTIVITY_ID}`);
	await page.click("#btnshow");
};

export default showAppointments;
