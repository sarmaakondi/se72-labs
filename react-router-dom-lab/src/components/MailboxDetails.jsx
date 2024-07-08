import { useParams } from "react-router-dom";

const MailBoxDetails = ({ mailboxes, letters }) => {
    const { id } = useParams();

    const selectedMailbox = mailboxes.find(
        (mailbox) => mailbox._id === Number(id)
    );

    const letterData = letters.find(
        (letter) => Number(letter.mailboxId) === selectedMailbox._id
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

            {letterData && (
                <>
                    <h3>Letters</h3>
                    <p>Dear {letterData.recipient},</p>
                    <p>{letterData.message}</p>
                </>
            )}
        </>
    );
};

export default MailBoxDetails;
