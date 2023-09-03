exports.blogCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog created successfully",
  });
};

exports.blogRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog read successfully",
  });
};

exports.blogDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog deleted successfully",
  });
};

exports.blogUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Blog updated successfully",
  });
};
