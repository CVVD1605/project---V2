import React, { useState, useEffect } from "react";

const ProfileForm = ({ editingProfile, saveProfile, resetEditing }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    profile_picture: null,
    phone_number: "",
    date_of_birth: "",
    address: "",
    availability: "",
    status: "active",
  });

  // Populate form when editing a profile
  useEffect(() => {
    if (editingProfile) {
      setFormData({
        username: editingProfile.user.username,
        email: editingProfile.user.email,
        password: "",
        first_name: editingProfile.user.first_name,
        last_name: editingProfile.user.last_name,
        profile_picture: editingProfile.profile_picture,
        phone_number: editingProfile.phone_number,
        date_of_birth: editingProfile.date_of_birth,
        address: editingProfile.address,
        availability: editingProfile.availability,
        status: editingProfile.status,
      });
    } else {
      resetForm();
    }
  }, [editingProfile]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      profile_picture: null,
      phone_number: "",
      date_of_birth: "",
      address: "",
      availability: "",
      status: "active",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile(formData, editingProfile?.id);
    resetEditing();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProfile ? "Edit Profile" : "Create Profile"}</h2>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required={!editingProfile}
      />
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="file"
        name="profile_picture"
        onChange={handleChange}
        accept="image/*"
      />
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="date"
        name="date_of_birth"
        value={formData.date_of_birth}
        onChange={handleChange}
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        placeholder="Availability"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit">{editingProfile ? "Update" : "Create"}</button>
      <button type="button" onClick={resetEditing}>
        Cancel
      </button>
    </form>
  );
};

export default ProfileForm;
