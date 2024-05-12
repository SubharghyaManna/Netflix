import "./NetflixMainComponent.css";
import NetflixRegistrationComponent from "./SmallerComponents/NetflixRegistrationComponent";

export default function NetflixMainComponent() {
    return (
        <div className="netflix_main">
            <div className="netflix_content">
                <div className="text-center text-white">
                    <h1 className="fw-bold p-2">Unlimited movies, TV shows and more</h1>
                    <h3 className="p-2">Unlimited movies, TV shows and more</h3>
                </div>
                <NetflixRegistrationComponent />
            </div>
        </div>
    );
}