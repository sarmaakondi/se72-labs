import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    boxholder: "",
    boxSize: "",
};

const MailBoxForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);

    const options = [
        { value: "", label: "" },
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
    ];

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate("/mailboxes");
    };

    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxHolder">Boxholder Name:</label>
                <input
                    type="text"
                    name="boxholder"
                    id="boxholder"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name="boxSize" id="boxSize" onChange={handleChange}>
                    {options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default MailBoxForm;
