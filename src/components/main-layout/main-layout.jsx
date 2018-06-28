import React from 'react';
import './main-layout.scss';

import ContactList from '../contact-list/contact-list.jsx';

class MainLayout extends React.Component
{
    render()
    {
        return (
            <div className="main">
                <ContactList />
            </div>
        );
    }
}

export default MainLayout;
