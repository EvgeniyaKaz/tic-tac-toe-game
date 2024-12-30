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
	const isValid = (index) => {
		if (field[index] === '') {
			return false;
		} else {
			return true;
		}
	};

	const clickButton = (index) => {
		const newField = [...field];

		if (winner) {
			return setIsGameEnded(true);
		}

		if (!winner && newField[index] !== '') {
			return setIsDraws(true);
		}

		if (currentPlayer === 'X') {
			newField[index] = 'X';
			setCurrentPlayer('O');
		} else {
			newField[index] = 'O';
			setCurrentPlayer('X');
		}

		setField(newField);
	};
	return (
		<div className={styles['playing-field']}>
			{field.map((currentValue, i) => (
				<button className={styles['playing-field-button']} key={i} disabled={isValid(i)} onClick={() => clickButton(i)}>
					{currentValue}
				</button>
			))}
		</div>
	);
};
