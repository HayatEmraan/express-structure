exports.serviceCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Service created successfully",
  });
};

exports.serviceRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Service read successfully",
  });
};

exports.serviceDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Service deleted successfully",
  });
};

exports.serviceUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Service updated successfully",
  });
};
