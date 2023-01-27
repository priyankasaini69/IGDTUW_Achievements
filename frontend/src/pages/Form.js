import './form.css'
import Select from '@mui/material/Select';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Form() {

    const [team, setTeam] = React.useState('');
    const [publicP, setPublicP] = React.useState('');
    const [Achievement_cat, setAchievement_cat] = React.useState('');
    const [year, setYear] = React.useState('');
    const [Organization, setOrganization] = React.useState('');
    const [achievement, setAchievement] = React.useState('');
    const [image, setImage] = React.useState('');


    const handleachievement = (event) => {
        setAchievement(event.target.value);
    };
    const handleOrganization = (event) => {
        setOrganization(event.target.value);
    };

    const handleImage = (event) => {
        setImage(event.target.value);
    };



    const handleteam = (event) => {
        setTeam(event.target.value);
    };

    const handlepublic = (event) => {
        setPublicP(event.target.value);
    };

    const handleyear = (event) => {
        setYear(event.target.value);
    };

    const handleSelect = (event) => {
        setAchievement_cat(event.target.value);
    };


    const handleSubmit = () => {
        console.log(Achievement_cat, year, team, Organization, publicP, achievement, image);
    }

    const handleCancel = () => {
        <link to="/Dashboard" />
    }

    return (
        <div className='fo'>
            <h1> Add your Achievement</h1>
            <div className="form">
                <div className="Achievement_cat">
                    <label className="form__label"></label>
                    <div>
                        <FormControl sx={{ m: 2, minWidth: 480 }}>
                            <InputLabel id="Achievement Category">Achievement Category</InputLabel>
                            <Select
                                required
                                labelId="Achievement Category"
                                id="Achievement_Category"
                                value={Achievement_cat}
                                onChange={handleSelect}
                                autoWidth
                                label="Achievement Category"
                            >
                                <MenuItem value={"Hackathon"}>Hackathon</MenuItem>
                                <MenuItem value={"Ideathon"}>Ideathon</MenuItem>
                                <MenuItem value={"Research"}>Research</MenuItem>
                                <MenuItem value={"Coding Contest"}>Coding Contest</MenuItem>
                                <MenuItem value={"Scholarship"}>Scholarship</MenuItem>
                                <MenuItem value={"Technical programs"}>Technical programs</MenuItem>
                                <MenuItem value={"Quiz"}>Quiz</MenuItem>
                                <MenuItem value={"Speaker @ conference"}>Speaker @ conference</MenuItem>
                                <MenuItem value={"Placement"}>Placement</MenuItem>
                                <MenuItem value={"Non-Technical"}>Non-Technical</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="year">
                        <Box
                            component="year"
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: 480 },
                            }}
                            noValidate
                            required
                            autoComplete="off"
                            value={year}
                            onChange={handleyear}
                        >
                            <div>
                                <TextField
                                    required
                                    id="year"
                                    label="Year of graduation"
                                    type="default"
                                />
                            </div>
                        </Box>
                    </div>

                    <div className="team">
                        <FormControl sx={{ m: 2, minWidth: 480 }}>
                            <InputLabel id="Team Event">Team Event</InputLabel>
                            <Select
                                required
                                labelId="Team Event"
                                id="Team Event"
                                value={team}
                                onChange={handleteam}
                                autoWidth
                                label="Team Event"
                            >
                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="Organiztion">
                        <Box
                            component="Organization"
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: 480 },
                            }}
                            noValidate
                            autoComplete="off"
                            value={Organization}
                            onChange={handleOrganization}
                        >
                            <div>
                                <TextField
                                    required
                                    id="Organization"
                                    label="Name of Oragnization"
                                    type="default"
                                />
                            </div>
                        </Box>
                    </div>

                    <div className="publicP">
                        <FormControl sx={{ m: 2, minWidth: 480 }}>
                            <InputLabel id="PublicP">Share publically?</InputLabel>
                            <Select
                                required
                                labelId="publicP"
                                id="publicP"
                                value={publicP}
                                onChange={handlepublic}
                                autoWidth
                                label="Share Publically>"
                            >
                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="Achievement">
                        <Box
                            component="Achievement"
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: 480 },
                            }}
                            noValidate
                            autoComplete="off"
                            value={achievement}
                            onChange={handleachievement}
                        >
                            <div>
                                <TextField
                                    required
                                    id="Achievement-details"
                                    label="Details"
                                    type="default"
                                />
                            </div>
                        </Box>
                    </div>

                    <div className="Image">
                        <Box
                            component="Image"
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: 480 },
                            }}
                            noValidate
                            value={Image}
                            onChange={handleImage}
                        >
                            <div>
                                <p>Upload an image relevent to you acheivement</p>
                                <input type="file"
                                    id="image"
                                    label="Image"
                                />
                            </div>
                        </Box>
                    </div>



                </div>
                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" class="btn">Submit</button>
                    <button onClick={() => handleCancel()} type="Cancel" class="btn">Cancel</button>
                </div>


            </div>
            {/* < Footer /> */}
        </div>

    )
}


export default Form