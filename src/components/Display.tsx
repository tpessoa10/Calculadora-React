import styles from './Display.module.css'

interface DisplayProps{
    value:string
}

export default function Display({value}:DisplayProps){
    return(
        <div className={styles.display}>{value}</div>
    )
}