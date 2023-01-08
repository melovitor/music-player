import styles from './Player.module.css'
import { PlayPause } from './PlayPause'
import banner from '../assets/AcordaDevinho.png'

export function Player(){
    return (        
        <div className={styles.card}>
            <div className={styles.info}>            
            <img src={banner} className={styles.banner}/> 
            <div className={styles.title}>
                <h1 className={styles.music}>Acorda Devinho</h1>
                <h2 className={styles.author}>Banda Rocketseat</h2>
            </div>
        </div>
        <div className={styles.playPause}>
            <PlayPause/>
        </div>      
        </div>        
    )
}