const Navigation = () => {
    const handleNavToggle = () => {
        const nav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');
        const isVisible = nav.getAttribute('data-visible') === 'true';

        nav.setAttribute('data-visible', !isVisible);
        navToggle.setAttribute('aria-expanded', !isVisible);
    };

    return (
        <div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation">
                <span className="sr-only" aria-expanded="false">
                    Menu
                </span>
            </button>
        </div>
    );
};

export default Navigation;
