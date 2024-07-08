import { useParams } from "react-router-dom";

const MailBoxDetails = ({ mailboxes }) => {
    const { id } = useParams();
    const selectedMailbox = mailboxes.find(
        (mailbox) => mailbox._id === Number(id)
    );

    return (
        <>
            {selectedMailbox ? (
                <>
                    <h1>Mailbox {selectedMailbox._id}</h1>
                    <h3>Details</h3>
                    <p>Boxholder: {selectedMailbox.boxholder}</p>
                    <p>Box Size: {selectedMailbox.boxSize}</p>
                </>
            ) : (
                <h2>Mailbox Not Found!</h2>
            )}
        </>
    );
};

export default MailBoxDetails;
