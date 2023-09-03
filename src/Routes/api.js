const express = require("express");
const {
  blogCreate,
  blogRead,
  blogDelete,
  blogUpdate,
} = require("../Controllers/blogController");
const {
  blogDetailsCreate,
  blogDetailsRead,
  blogDetailsDelete,
  blogDetailsUpdate,
} = require("../Controllers/blogDetailsController");
const {
  commentCreate,
  commentRead,
  commentDelete,
  commentUpdate,
} = require("../Controllers/commentController");
const {
  messageCreate,
  messageRead,
  messageDelete,
  messageUpdate,
} = require("../Controllers/messageController");
const {
  portfolioCreate,
  portfolioRead,
  portfolioDelete,
  portfolioUpdate,
} = require("../Controllers/portfolioController");
const {
  profitCreate,
  profitRead,
  profitDelete,
  profitUpdate,
} = require("../Controllers/profitController");
const {
  productCreate,
  productRead,
  productDelete,
  productUpdate,
} = require("../Controllers/productController");
const {
  titleCreate,
  titleRead,
  titleDelete,
  titleUpdate,
} = require("../Controllers/titleController");
const {
  projectCreate,
  projectRead,
  projectDelete,
  projectUpdate,
} = require("../Controllers/projectController");
const { serviceCreate, serviceRead, serviceDelete, serviceUpdate } = require("../Controllers/serviceController");
const router = express.Router();

router.get("/blogcreate", blogCreate);
router.get("/blogread", blogRead);
router.get("/blogdelete", blogDelete);
router.get("/blogupdate", blogUpdate);

router.get("/blogdetailscreate", blogDetailsCreate);
router.get("/blogdetailsread", blogDetailsRead);
router.get("/blogdetailsdelete", blogDetailsDelete);
router.get("/blogdetailsupdate", blogDetailsUpdate);

router.get("/commentCreate", commentCreate);
router.get("/commentRead", commentRead);
router.get("/commentdelete", commentDelete);
router.get("/commentupdate", commentUpdate);

router.get("/messageCreate", messageCreate);
router.get("/messageRead", messageRead);
router.get("/messagedelete", messageDelete);
router.get("/messageupdate", messageUpdate);

router.get("/portfolioCreate", portfolioCreate);
router.get("/portfolioRead", portfolioRead);
router.get("/portfolioDelete", portfolioDelete);
router.get("/portfolioUpdate", portfolioUpdate);

router.get("/productCreate", productCreate);
router.get("/productRead", productRead);
router.get("/productDelete", productDelete);
router.get("/productUpdate", productUpdate);

router.get("/profitCreate", profitCreate);
router.get("/profitRead", profitRead);
router.get("/profitDelete", profitDelete);
router.get("/profitUpdate", profitUpdate);

router.get("/projectCreate", projectCreate);
router.get("/projectRead", projectRead);
router.get("/projectDelete", projectDelete);
router.get("/projectUpdate", projectUpdate);

router.get("/serviceCreate", serviceCreate);
router.get("/serviceRead", serviceRead);
router.get("/serviceDelete", serviceDelete);
router.get("/serviceUpdate", serviceUpdate);

router.get("/titlecreate", titleCreate);
router.get("/titleread", titleRead);
router.get("/titledelete", titleDelete);
router.get("/titleupdate", titleUpdate);

module.exports = router;
