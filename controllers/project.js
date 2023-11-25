const Projects = require("../models/Projects");
const submitProject = async (req, res) => {
    const project = await Projects.create({ ...req.body });
    res.status(201).json({ project: project });
    
};
const updateIsSeasonStarted = async (projectId,greenHouse,openField) => {
    const project = await Projects.findById({ _id: projectId });
    if (openField != null && greenHouse != null) {
        const projects = await Projects.findByIdAndUpdate({ _id: projectId }, { seasonStarted: true, numberOfGreenHouses: project.numberOfGreenHouses - greenHouse, openFieldsArea: project.openFieldsArea - openField });
        return;
    }
    if (openField != null) {
        const projects = await Projects.findByIdAndUpdate({ _id: projectId }, { seasonStarted: true, openFieldsArea: project.openFieldsArea - openField });
        return;
    }
    if (greenHouse != null) {
        const projects = await Projects.findByIdAndUpdate({ _id: projectId }, { seasonStarted: true, numberOfGreenHouses: project.numberOfGreenHouses - greenHouse});
        return;
 }

};

const getAllProjects = async (req, res) => {
    const { userID } = req.query;
    const projects = await Projects.find({ userID }); 
    res.status(201).json({ project: projects });
};
module.exports = { submitProject,getAllProjects,updateIsSeasonStarted};
