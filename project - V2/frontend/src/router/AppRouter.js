import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VolunteerList from '../components/VolunteerList';
import AddVolunteer from '../components/AddVolunteer';
import ViewProfile from '../components/ViewProfile';
import EditVolunteer from '../components/EditVolunteer';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VolunteerList />} />
                <Route path="/add" element={<AddVolunteer />} />
                <Route path="/view/:id" element={<ViewProfile />} /> {/* View profile route */}
                <Route path="/edit/:id" element={<EditVolunteer/>}/>
            </Routes>
        </Router>
    );
};

export default App;
