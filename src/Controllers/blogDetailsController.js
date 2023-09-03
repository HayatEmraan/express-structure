exports.blogDetailsCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog details created successfully",
  });
};

exports.blogDetailsRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog details read successfully",
  });
};

exports.blogDetailsUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog details updated successfully",
  });
};

exports.blogDetailsDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog details deleted successfully",
  });
};
