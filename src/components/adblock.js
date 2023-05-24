import React from 'react'
import AdSense from 'react-adsense'

const AdBlock = () => (
    <AdSense.Google
        client="YOUR-CODE-HERE"
        slot="YOUR-SLOT-HERE"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
    />
)

export default AdBlock