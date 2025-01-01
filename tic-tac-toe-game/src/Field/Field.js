import styles from './Field.module.css';

export const FieldLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraws,
	winner,
}) => {
	const clickButton = (index) => {
		const newField = [...field];

		if (winner) {
			setIsGameEnded(true);
		}

		if (!winner && newField[index] !== '') {
			setIsDraws(true);
		}

		if (currentPlayer === 'X' && newField[index] === '' && !isGameEnded) {
			newField[index] = 'X';
			if (winner) {
				setCurrentPlayer('X');
			} else if (!winner) {
				setCurrentPlayer('O');
			}
		} else if (currentPlayer === 'O' && newField[index] === '' && !isGameEnded) {
			newField[index] = 'O';
			if (winner) {
				setCurrentPlayer('O');
			} else if (!winner) {
				setCurrentPlayer('X');
			}
		}
		setField(newField);
	};
	return (
		<div className={styles['playing-field']}>
			{field.map((value, i) => (
				<button
					className={styles['playing-field-button']}
					key={i}
					onClick={() => {
						clickButton(i);
					}}
				>
					{value}
				</button>
			))}
		</div>
	);
};
