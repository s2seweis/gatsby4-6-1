import React from 'react'
import AdSense from 'react-adsense'

const AdBlock = () => (
    <AdSense.Google
        client="5912939817167412"
        slot="Y4675679702"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
        alt='The Solace Life | Food Blog'
    />
)

export default AdBlock