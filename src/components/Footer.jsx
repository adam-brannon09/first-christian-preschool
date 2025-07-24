function Footer() {
    return (
        <>
            <footer className="footer p-10 background text-white">
                <nav>
                    <header className="footer-title">Address</header>
                    <a href="https://www.google.com/maps/place/First+Christian+Preschool/@30.7181516,-86.1203792,17z/data=!3m1!4b1!4m6!3m5!1s0x8893d1bec7c55555:0x2a7aa3efe9304c30!8m2!3d30.7181516!4d-86.1178043!16s%2Fg%2F11ghr0wmb3?entry=ttu">
                        <p>First Christian Preschool
                            <br />
                            225 S. 11th St.
                            <br />
                            Defuniak Springs, FL 32435
                            <br />
                            LICENSE #: C01WA0018</p>
                    </a>
                </nav>
                <nav>
                    <header className="footer-title font-bold">Contact</header>
                    <a href="tel:8505202167" className="link link-hover">(850) 520-2167</a>
                    <a href="mailto:aprilmurphyfcp@gmail.com" className="link link-hover" >Email</a>
                    <a href="https://www.facebook.com/firstchristianpreschool.net" className="link link-hover">Facebook</a>
                </nav>
                <nav>
                    <header className="footer-title">Office Hours</header>
                    <p>Monday - Friday: 9am - 4pm</p>
                    <br />
                    <header className="footer-title">License</header>
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