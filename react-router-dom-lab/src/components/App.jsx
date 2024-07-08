import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import MailBoxForm from "./MailboxForm";
import MailBoxList from "./Mailboxlist";
import MailBoxDetails from "./MailboxDetails";
import LetterForm from "./LetterForm";

const initialData = [
    {
        _id: 1,
        boxSize: "Small",
        boxholder: "Alex",
    },
    {
        _id: 2,
        boxSize: "Medium",
        boxholder: "John",
    },
    {
        _id: 3,
        boxSize: "Large",
        boxholder: "Doe",
    },
];

function App() {
    const [mailboxes, setMailboxes] = useState([]);
    const [letters, setLetters] = useState([]);

    const addBox = (newMailboxData) => {
        newMailboxData._id = mailboxes.length + 1;
        setMailboxes([...mailboxes, newMailboxData]);
    };

    const addLetter = (newLetterData) => {
        setLetters([...letters, newLetterData]);
    };

    useEffect(() => {
        setMailboxes(initialData);
    }, []);

    return (
        <>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <h1>Post Office</h1>
                        </main>
                    }
                />
                <Route
                    path="/mailboxes"
                    element={<MailBoxList mailboxes={mailboxes} />}
                />
                <Route
                    path="/new-mailbox"
                    element={<MailBoxForm addBox={addBox} />}
                />
                <Route
                    path="/mailboxes/:id"
                    element={
                        <MailBoxDetails
                            mailboxes={mailboxes}
                            letters={letters}
                        />
                    }
                />
                <Route
                    path="/new-letter"
                    element={
                        <LetterForm
                            mailboxes={mailboxes}
                            addLetter={addLetter}
                        />
                    }
                />
                <Route path="*" element={<h2>Page Not Found!</h2>} />
            </Routes>
        </>
    );
}

export default App;
