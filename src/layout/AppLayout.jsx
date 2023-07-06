import Footer from "./Footer/"
import Nav from "./Nav/Nav"
export default function AppLayout({children}){

    return (
        <div id="mainContainer">
            {/* <Nav /> */}
            {children}
            <Footer />
        </div>
    )
}