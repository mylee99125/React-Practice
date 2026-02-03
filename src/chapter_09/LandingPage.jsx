import { useState } from 'react';
import Toolbar from './Toolbar';

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClockLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClockLogout={onClockLogout}
            />
            <div style={{ padding: 16 }}>Hello, React!</div>
        </div>
    );
}

export default LandingPage;