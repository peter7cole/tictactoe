import React, { useState } from 'react';

const emptyCell = {
	on: false,
	owner: '',
};

const Grid = () => {
	const initialCells = Array.from({ length: 9 }, () => emptyCell);
	const [cells, setCells] = useState(initialCells);
	return <div></div>;
};

export default Grid;
