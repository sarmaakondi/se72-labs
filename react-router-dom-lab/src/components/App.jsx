import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import MailBoxForm from "./MailboxForm";
import MailBoxList from "./Mailboxlist";
import MailBoxDetails from "./MailboxDetails";

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
                <Route path="/new-mailbox" element={<MailBoxForm />} />
                <Route
                    path="/mailboxes/:id"
                    element={<MailBoxDetails mailboxes={mailboxes} />}
                />
            </Routes>
        </>
    );
}

export default App;
