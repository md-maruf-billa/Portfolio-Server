import { Router } from "express";
import { adminController } from "./admin.controller";
import checkUserTokenIsValid from "../../utils/checkUserTokenIsValid";

const adminRouter = Router();

// block user
adminRouter.patch("/users/:userId/block", checkUserTokenIsValid("admin"), adminController.blockUser);

// delete blogs
adminRouter.delete("/blogs/:id", checkUserTokenIsValid("admin"), adminController.deleteBlog);



export default adminRouter;