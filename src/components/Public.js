import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Ceylon Tech Repairs</span></h1>
            </header>

            <main className="public__main">
                <p>
                    This is the internal task management system for Ceylon Tech Repairs. Employees can log in to view and manage their assigned work notes efficiently.
                </p>

                <address className="public__addr">
                    <strong>Contact:</strong><br />
                    Ceylon Tech Repairs<br />
                    45 Galle Road<br />
                    Colombo 03, Sri Lanka<br />
                    <a href="tel:+94112223344">+94 11 222 3344</a><br />
                    <a href="mailto:info@ceylontech.lk">info@ceylontech.lk</a>
                </address>

                <p><strong>Owner:</strong> Chamara Perera</p>
            </main>

            <footer>
                <Link to="/login" className="btn-login">Employee Login</Link>
            </footer>
        </section>
    );

    return content;
}

export default Public;
