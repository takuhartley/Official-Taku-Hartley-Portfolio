import Project from "../models/projectModel.js";

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  const project = await Project.find({});
  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("projects not found");
  }
};

const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("project not found");
  }
};

export { getProjects, getProjectById };
