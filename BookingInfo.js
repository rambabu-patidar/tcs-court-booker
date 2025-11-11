class BookingInfo {
	constructor(activity, bookingTimeStartHour, playersList) {
		this.activity = activity;
		this.bookingTimeStartHour = bookingTimeStartHour;
		this.playersList = playersList;
	}

	getActivity() {
		return this.activity;
	}
	getBookingTimeStartHour() {
		return this.bookingTimeStartHour;
	}
	getPlayersList() {
		return this.playersList;
	}
}
