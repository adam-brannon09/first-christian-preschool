function Footer() {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <nav>
                    <header className="footer-title">Address</header>
                    <p>First Christian Preschool
                        <br />
                        225 S. 11th St.
                        <br />
                        Defuniak Springs, FL 32435
                        <br />
                        LICENSE #: C01WA0018</p>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">(850) 951-1225</a>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">Facebook</a>
                </nav>
                <nav>
                    <header className="footer-title">Hours</header>
                    <p>Monday - Friday: 8am - 5:30pm</p>
                    <br />
                    <header>License</header>
                    <p>License #: C01WA0018</p>
                </nav>

            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">

                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">

                    </div>
                </nav>
            </footer>
        </>
    )
}
export default Footer