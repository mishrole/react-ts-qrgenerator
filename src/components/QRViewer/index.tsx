import React from 'react'
import QRCode from 'react-qr-code'
import styles from './qrviewer.module.css'

const QRViewer: React.FC = () => {
    const [value, setValue] = React.useState<string>(
        'https://www.realplaza.com/checkout/cart/add?sku=264201&qty=1&seller=oechsle&sc=1'
    )

    const BACK_COLOR = '#ffffff'
    const FRONT_COLOR = '#7300e0'
    const SIZE = 256

    return (
        <div className={styles.qr_viewer__wrapper}>
            <h1>Checkout QR</h1>
            <div className={styles.qr_viewer__wrapper}>
                <div>
                    <b>URL</b>
                </div>
                <input
                    className={styles.qr_viewer__input}
                    title="qr-input"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            {value && value.trim().length > 0 && (
                <QRCode value={value} bgColor={BACK_COLOR} fgColor={FRONT_COLOR} size={SIZE} />
            )}
        </div>
    )
}

export default QRViewer
