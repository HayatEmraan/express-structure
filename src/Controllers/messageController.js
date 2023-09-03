exports.messageCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Message created successfully",
  });
};

exports.messageRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Message read successfully",
  });
};

exports.messageDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Message deleted successfully",
  });
};

exports.messageUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Message updated successfully",
  });
};
