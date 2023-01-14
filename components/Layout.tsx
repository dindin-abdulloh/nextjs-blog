import React, { Children } from 'react'
import {Header} from './index'

const Layout = ({children} : {children : any}) => {
    return (
       <>
        <Header/>
        {children}
       </>
    )
}

export default Layout