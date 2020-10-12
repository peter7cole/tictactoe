const detectTicTacToeWin = board => {
	let iv1m = true; // initial value match 1 diagonal
	let iv2m = true; // initial  value match 2 diagonal
	let ivhm = false; // initial value horizontal match
	let ivvm = false; // initial value vertical match
	let hFlag = false; // short circuit flag for horizontal
	let vFlag = false; // short circuit flag vertical
	let iv1 = board[0][0]; // initial value diagonal top left
	let iv2 = board[board.length - 1][0]; // initial value diagonal top right
	let i = 0; // index move left to right
	let j = board.length - 1; // index move right to left
	while (i < board.length && j >= 0) {
		// sliding window close together same rate
		// diagonal top right to bottom left
		if (board[j][i] && board[j][i] !== iv2) iv2m = false;
		// diagonal top left to bottom right
		if (board[i][i] && board[i][i] !== iv1) iv1m = false;
		for (let k = 1; k < board.length; k++) {
			// check horizontal
			if (board[i][0] && !hFlag) {
				if (board[i][k] && board[i][k] === board[i][0]) {
					ivhm = true;
				} else {
					ivhm = false;
					hFlag = true;
				}
			}
			// check vert
			if (board[0][i] && !ivvm && !vFlag) {
				if (board[k][i] && board[k][i] === board[0][i]) {
					ivvm = true;
				} else {
					ivvm = false;
					vFlag = true;
				}
			}
		}
		i++;
		j--;
		hFlag = false;
		vFlag = false;
	}
	// console.log(iv1m, iv2m, ivhm, ivvm);
	return iv1m || iv2m || ivhm || ivvm;
};
