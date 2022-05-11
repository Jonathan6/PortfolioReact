

function Navigation({currentPage, handlePageChange}) {
    const handleClick = (event) => {
        console.log(event.currentTarget.value);
        handlePageChange(event.currentTarget.value);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Jonathan Chen</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button value='about' onClick={handleClick}>About me</button>
                        </li>
                        <li className="nav-item">
                            <button value='portfolio' onClick={handleClick}>Portfolio</button>
                        </li>
                        <li className="nav-item">
                            <button value='contact' onClick={handleClick}>Contact</button>
                        </li>
                        <li className="nav-item">
                            <button value='resume' onClick={handleClick}>Resume</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;