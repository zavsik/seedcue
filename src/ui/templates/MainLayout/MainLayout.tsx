import React from 'react'
import './style.scss'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ( { children }: MainLayoutProps ) => {

    return (
        <>
            <div>

                {/*<Header />*/ }
                {/*<Sidebar />*/ }

                <main>
                    { children }
                </main>
            </div>
        </>
    )
}

export default MainLayout