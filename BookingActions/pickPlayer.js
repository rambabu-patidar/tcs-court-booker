const pickPlayer = async (page, playerName) => {
	// search player and then pick it.
	await page.fill(".ui-autocomplete-input", playerName);

	await page.evaluate((player) => {
		const playersList = document.querySelectorAll(
			".ui-menu-item .ui-corner-all"
		);
		for (let playerElement of playersList) {
			if (playerElement.innerText.includes(player)) {
				playerElement.click();
				break;
			}
		}
	}, playerName);

	await page.click("#btnadd");
};

export default pickPlayer;
