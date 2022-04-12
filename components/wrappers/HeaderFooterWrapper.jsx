import React from 'react'
import Header from '../common/Header'

const HeaderFooterWrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default HeaderFooterWrapper