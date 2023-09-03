exports.titleCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Title created successfully",
  });
};

exports.titleRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Title read successfully",
  });
};

exports.titleDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Title deleted successfully",
  });
};

exports.titleUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Title updated successfully",
  });
};
