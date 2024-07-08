import { Link } from "react-router-dom";

const MailBoxList = ({ mailboxes }) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {mailboxes.map((mailbox) => {
                    return (
                        <li key={mailbox._id} className="mail-box">
                            <Link to={`/mailboxes/${mailbox._id}`}>
                                Mailbox {mailbox._id}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default MailBoxList;
