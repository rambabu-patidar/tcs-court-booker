const showAppointments = async (
	page,
	bookingDate,
	bookingDateWeekDayNumber
) => {
	// fill the date
	if (bookingDateWeekDayNumber != 6) {
		await page.click(".ui-datepicker-trigger");
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
