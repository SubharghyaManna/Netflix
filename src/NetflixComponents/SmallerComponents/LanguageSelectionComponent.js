import "./LanguageSelectionComponent.css";

export default function LanguageSelectionComponent(){
    return(
        <select className="form-select language-select">
            <option lang="en" label="English" value="en-IN">English</option>
            <option lang="hi" label="हिन्दी" value="hi-IN">हिन्दी</option>
        </select>
    );
}