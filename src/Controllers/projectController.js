exports.projectCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Project created successfully",
  });
};

exports.projectRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Project read successfully",
  });
};

exports.projectDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Project deleted successfully",
  });
};

exports.projectUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Project updated successfully",
  });
};
