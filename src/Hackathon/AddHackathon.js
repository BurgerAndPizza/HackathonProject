import React, { useState } from 'react';
import classes from './AddHackathon.module.css';

const AddHackathon = ({ onAddHackathon }) => {
    const [formData, setFormData] = useState({
        challengeName: '',
        startDate: '',
        endDate: '',
        description: '',
        image: null,
        level: 'Easy'
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddHackathon(formData);
        setFormData({
            challengeName: '',
            startDate: '',
            endDate: '',
            description: '',
            image: null,
            level: 'Easy'
        });
    };

    return (
        <div className={classes.container}>
            <h2 className={classes.heading}>Create a New Hackathon</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label>Challenge Name:</label>
                <input
                    type="text"
                    name="challengeName"
                    value={formData.challengeName}
                    onChange={handleChange}
                    required
                />
                <label>Start Date:</label>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
                <label>End Date:</label>
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <label>Image:</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                />
                <label>Level:</label>
                <select
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                >
                    <option value="Easy">Easy</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Hard">Hard</option>
                </select>
                <button type="submit">Create Hackathon</button>
            </form>
        </div>
    );
};

export default AddHackathon;
