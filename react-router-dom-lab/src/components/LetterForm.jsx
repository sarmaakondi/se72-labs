import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    mailboxId: 0,
    recipient: "",
    message: "",
};

const LetterForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedMailboxId = event.target.elements.mailboxId.value;
        props.addLetter(formData);
        setFormData(initialState);
        navigate(`/mailboxes/${selectedMailboxId}`);
    };

    return (
        <>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox</label>
                <select name="mailboxId" id="mailboxId" onChange={handleChange}>
                    {props.mailboxes.map((mailbox) => {
                        return (
                            <option key={mailbox._id} value={mailbox._id}>
                                {`Mailbox ${mailbox._id}`}
                            </option>
                        );
                    })}
                </select>
                <label htmlFor="recipient">Recipient</label>
                <input
                    type="text"
                    name="recipient"
                    id="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default LetterForm;
