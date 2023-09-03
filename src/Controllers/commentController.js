exports.commentCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Comment created successfully",
  });
};

exports.commentRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Comment read successfully",
  });
};

exports.commentUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Comment updated successfully",
  });
};

exports.commentDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Comment deleted successfully",
  });
};
