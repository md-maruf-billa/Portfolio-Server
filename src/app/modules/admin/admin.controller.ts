import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminServices } from "./admin.service";
import status from 'http-status';

const blockUser = catchAsync(async (req, res) => {
    await adminServices.blockUserInDb(req.params.userId);
    sendResponse(res, {
        message: "User blocked successfully",
        statusCode: status.OK,
        data: null
    })
})
const deleteBlog = catchAsync(async (req, res) => {
    await adminServices.deleteBlogIntoDb(req.params.id);
    sendResponse(res, {
        message: "Blog delete successfully",
        statusCode: status.OK,
        data: null
    })
})


export const adminController = {
    blockUser,
    deleteBlog
}