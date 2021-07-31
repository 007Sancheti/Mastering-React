import React from 'react';
import './homepage.styles.scss'
import '../../components/directory/directory.component'
import Directoy from '../../components/directory/directory.component';
const HomePage = () => {
    return (
        <div className='homepage'>
            <Directoy />
        </div>
    );
};

export default HomePage;
