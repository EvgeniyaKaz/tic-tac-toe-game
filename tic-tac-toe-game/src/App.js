import { useState } from 'react';
import styles from './App.module.css';
import { InformationLayout } from './information/Information.js';
import { FieldLayout } from './Field/Field.js';

function calculateWinner(e) {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];
	for (let i = 0; i < WIN_PATTERNS.length; i++) {
		const [a, b, c] = WIN_PATTERNS[i];
		if (e[a] && e[a] === e[b] && e[a] === e[c]) {
			return e[a];
		}
	}
	return null;
}

function AppLayout() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraws] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const winner = calculateWinner(field);

	const startAgain = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraws(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<>
			<div className={styles.container}>
				<InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
				<FieldLayout
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					setIsDraws={setIsDraws}
					winner={winner}
				/>
				<button onClick={() => startAgain()} className={styles['container-button']}>
					Начать заново
				</button>
			</div>
		</>
	);
}

export default AppLayout;
