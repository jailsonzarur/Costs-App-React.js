import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({to, texto}) {
    return <Link to={to}><button className={styles.button}>{texto}</button></Link>
}

export default LinkButton