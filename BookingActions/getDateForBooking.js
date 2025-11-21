let bookingDateWeekDayNumber;

const getDateForBooking = async () => {
	// for Weekdays move the date by 7 days
	// for Saturdays book for the current day
	// for Sundays - No booking allowed

	const today = new Date();
	const dayOfWeek = today.getDay();

	// 0 - Sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday
	// Saturday
	if (dayOfWeek === 6) {
		bookingDateWeekDayNumber = 6;
		return bookingDateFormatter(today);
	} else if (dayOfWeek > 0 && dayOfWeek <= 5) {
		// Monday to Friday
		bookingDateWeekDayNumber = dayOfWeek;
		const bookingDate = new Date(today);
		bookingDate.setDate(today.getDate() + 7);
		const formattedDate = bookingDateFormatter(bookingDate);
		console.log(formattedDate);
		return formattedDate;
	} else {
		throw new Error("Bookings are not allowed on Sundays");
	}
};

function bookingDateFormatter(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${day}/${month}/${year}`;
}

export default getDateForBooking;
export { bookingDateWeekDayNumber };
