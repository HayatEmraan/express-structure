exports.profitCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Profit created successfully",
  });
};

exports.profitRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Profit read successfully",
  });
};

exports.profitDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Profit deleted successfully",
  });
};

exports.profitUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Profit updated successfully",
  });
};
