const pickPlayer = async (page, playerName, isBooker) => {
	// search player and then pick it.
	await page.fill(".ui-autocomplete-input", playerName.split(" ")[0]);

	let numberInList = process.env.BOOKER_NUMBER_IN_LIST;
	await page.evaluate(
		(object) => {
			const playersList = document.querySelectorAll(
				".ui-menu-item .ui-corner-all"
			);

			for (let playerElement of playersList) {
				console.log(playerElement.innerText + " " + object.playerName);
				if (playerElement.innerText.includes(object.playerName)) {
					if (!object.isBooker || object.numberInList === 1) {
						playerElement.click();
						break;
					} else object.numberInList = object.numberInList - 1;
					console.log(playerElement.innerText);
				}
			}
		},
		{ playerName: playerName, isBooker: isBooker, numberInList: numberInList }
	);

	await page.click("#btnadd");
};

export default pickPlayer;
