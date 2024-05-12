import "./NetflixFooterComponent.css";
import LanguageSelectionComponent from "./SmallerComponents/LanguageSelectionComponent";

export default function NetflixFooterComponent() {
    return (
        <div className="text-white bg-black footerComp">
            Questions? Call <u>000-800-919-1694</u>
            <div className="row text-decoration-underline">
                <div className="col">
                    <ul className="list-unstyled ">
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-unstyled ">
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <LanguageSelectionComponent />
            </div>
            <div className="row">
                <ul className="list-unstyled ">
                    <li>Help Centre</li>
                </ul>
            </div>
        </div>
    );
}