exports.portfolioCreate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Portfolio created successfully",
  });
};

exports.portfolioRead = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Portfolio read successfully",
  });
};

exports.portfolioDelete = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Portfolio deleted successfully",
  });
};

exports.portfolioUpdate = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Portfolio updated successfully",
  });
};
