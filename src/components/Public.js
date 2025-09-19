import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Ceylon Tech Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the heart of Colombo, Ceylon Tech Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Ceylon Tech Repairs<br />
                    45 Galle Road<br />
                    Colombo 03, Sri Lanka<br />
                    <a href="tel:+94112223344">+94 11 222 3344</a>
                </address>
                <br />
                <p>Owner: Chamara Perera</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
