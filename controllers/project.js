const Projects = require("../models/Projects");
const submitProject = async (req, res) => {
    const project = await Projects.create({ ...req.body });
    res.status(201).json({ project: project });
    
};

const getAllProjects = async (req, res) => {
    const { userID } = req.query;
    console.log(req.body);
    const projects = await Projects.find({ userID }); 
    res.status(201).json({ project: projects });
};
module.exports = { submitProject,getAllProjects};
