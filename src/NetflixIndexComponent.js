import NetflixFAQComponent from "./NetflixComponents/NetflixFAQComponent";
import NetflixFooterComponent from "./NetflixComponents/NetflixFooterComponent";
import NetflixHeaderComponent from "./NetflixComponents/NetflixHeaderComponent";
import NetflixMainComponent from "./NetflixComponents/NetflixMainComponent";
import "./NetflixIndexComponent.css";

function NetflixIndexComponent() {
    return (
        <div className="netflix_index">
            <div className="welcome">
                <header>
                    <NetflixHeaderComponent/>
                </header>
                <main>
                    <NetflixMainComponent/>
                </main>
            </div>
            <div className="gallery"></div>
            <div className="gallery"></div>
            <div className="gallery"></div>
            <section>
                <NetflixFAQComponent/>
            </section>
            <footer>
                <NetflixFooterComponent/>
            </footer>
        </div>
    );
}

export default NetflixIndexComponent;