import React from 'react'

export default function() {
    return (
        <img src="data:image/png;base64,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" />
    )
}
