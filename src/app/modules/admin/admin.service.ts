import AppError from '../../errors/app.error'
import { BlogModel } from '../blog/blog.schema'
import { UserModel } from '../user/user.schema'
import httpStatus from 'http-status'

// block a user int db
const blockUserInDb = async (userId: string) => {
  // check if user exist
  const userExist = await UserModel.findById(userId)
  if (!userExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Not Found !!!')
  }
  const result = await UserModel.findByIdAndUpdate(userId, { isBlocked: true })
  return result
}
// delete blogs into db
const deleteBlogIntoDb = async (blogId: string) => {
  // check if blog exist
  const blogExist = await BlogModel.isBlogExist(blogId)
  if (!blogExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog Not Found')
  }
  const result = await BlogModel.findByIdAndUpdate(blogId, { isDeleted: true })
  return result
}

export const adminServices = {
  blockUserInDb,
  deleteBlogIntoDb
}
