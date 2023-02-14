import styles from './app.module.css'
import QRViewer from './components/QRViewer'

const App = () => {
    return (
        <div className={styles.app}>
            <QRViewer />
        </div>
    )
}

export default App
