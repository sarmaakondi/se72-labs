import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import MailBoxForm from "./MailboxForm";
import MailBoxList from "./Mailboxlist";
import MailBoxDetails from "./MailboxDetails";

function App() {
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
                <Route path="/mailboxes" element={<MailBoxList />} />
                <Route path="/new-mailbox" element={<MailBoxForm />} />
                <Route path="/mailboxes/:id" element={<MailBoxDetails />} />
            </Routes>
        </>
    );
}

export default App;
