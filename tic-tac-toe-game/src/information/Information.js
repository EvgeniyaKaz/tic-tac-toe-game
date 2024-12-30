import styles from './Information.module.css'

export const InformationLayout = ({currentPlayer, isGameEnded, isDraw}) => {
    return(
    <>
        <div className={styles.information}>
            <p className={styles['information-text']}>{isDraw === true ? 'Ничья' : isDraw === false && isGameEnded === true ? `Победа: ${currentPlayer}` : isDraw === false && isGameEnded === false ? `Ходит: ${currentPlayer}` : ""}</p>
        </div>
    </>)

}
