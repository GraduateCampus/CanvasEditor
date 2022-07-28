function Header ({setSelectedTab}) {

    return (
        <div className="header">
            <h1>Canvas Pagebuilder</h1>
            <ul className="header-center">
                <li onClick={() => setSelectedTab('Layout1')}>
                    Layout 1
                </li>
                <li>
                    Layout 2
                </li>
                <li>
                    Layout 3
                </li>
            </ul>
            <button className="exportbtn">
                Export
            </button>
        </div>
    );
}
export default Header;
