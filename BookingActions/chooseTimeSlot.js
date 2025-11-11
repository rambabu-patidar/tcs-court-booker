const choooseTimeSlot = async (page, bookingDate) => {
	const slotElement = page.locator(
		`a[href='/Appointment/BookActivity/${process.env.ACTIVITY_ID}/?TimeslotID=${
			process.env.BOOKING_TIME_START_HOUR - 6
		}&Datefrm=${bookingDate}']`
	);
	await slotElement.click();
};

export default choooseTimeSlot;
