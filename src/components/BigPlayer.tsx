import styles from './BigPlayer.module.css'
import { PlayPause } from './PlayPause'
import banner from '../assets/AcordaDevinho.png'
import Rail from '../assets/long-rail.svg'

export function BigPlayer(){
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
        <div className={styles.progressBar}>
            <img src={Rail} className={styles.rail}/>  
            <div className={styles.time}>
                <h1 className={styles.start}>3:20</h1>
                <h1 className={styles.end}>0:12</h1>
            </div>      
        </div>
            
        </div>        
    )
}