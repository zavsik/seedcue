import MainLayout from '../ui/templates/MainLayout/MainLayout'
import Auth from '../ui/pages/Auth/Auth'
import React, { FC } from 'react';

const App: FC = () => {
    return (
        <MainLayout>
            <Auth />
        </MainLayout>
    );
};

export default App;