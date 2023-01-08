import styles from './LongPlayer.module.css'
import banner from '../assets/AcordaDevinho.png'
import { PlayPause } from './PlayPause'
import Rail from '../assets/rail.svg'

export function LongPlayer() {
    return (        
        <div className={styles.card}> 
            <img src={banner} className={styles.banner}/> 
            <div className={styles.title}>
                <h1 className={styles.music}>Acorda Devinho</h1>
                <h2 className={styles.author}>Banda Rocketseat</h2>
            </div>
            <PlayPause/>
            <div>
                <img src={Rail}/>
                <div className={styles.time}>
                    <h1 className={styles.start}>3:20</h1>
                    <h1 className={styles.end}>0:12</h1>
                </div>
            </div>
        </div>        
    )
}