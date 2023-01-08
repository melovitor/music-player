import styles from './PlayPause.module.css'
import Play from '../assets/play.svg'
import PlayForward from '../assets/play-forward.svg'
import PlayRewind from '../assets/play-rewind.svg'

export function PlayPause(){
    return (
        <div className={styles.player}>
           <img src={PlayRewind} />
           <img src={Play} />
           <img src={PlayForward} />
        </div>
    )
}