import React from "react";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Header() {
    return (
        <header>
            <h1>
                <LibraryBooksIcon />
                <span>Note Keeper</span>
            </h1>
        </header>
    );
}

export default Header;
