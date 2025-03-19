import React, { useEffect, useState } from 'react';
import api from "../api/api"

const Profiles = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getProfiles();
    }, []);

    const getProfiles = () => {
        api
            .get("/api/v1/volunteer/profiles/")
            .then((res) => res.data)
            .then((data) => {
                setProfiles(data);
                console.log(data);
                setLoading(false);
            })

            .catch(error => {
                alert(error);
                console.error('Error fetching volunteers:', error);
                setLoading(false);
            });
    };


    if (loading) return <p>Loading volunteer profiles...</p>;
    if (error) return <p>{error}</p>;


    const deleteProfile = (id) => {
        api
            .delete(`/api/v1/volunteer/profiles/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Profile deleted!");
                else alert("Failed to delete note.");
                getProfiles();
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <h1>Volunteer Profiles</h1>
            {/* <Link to="/add">Add Volunteer</Link> */}
            <a href="/add">Add Profile</a>
            <ul>
                {profiles.map(profile => (
                    <li key={profile.id}>
                        <div>
                            <h3>{profile.user.username}</h3>
                            <p>Name: {profile.user.first_name} {profile.user.last_name}</p>
                            <p>Email: {profile.user.email}</p>
                            <p>DOB: {profile.date_of_birth }</p>
                            {profile.profile_picture && <img src={profile.profile_picture} alt="Profile Picture" width="50" height="50" />}
                        </div>
                        <button onClick={() => deleteProfile(profile.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profiles;