import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import status from 'http-status'
import { porjectServices as projectServices } from './project.service'
import { TProject } from './project.interface'

const createProject = catchAsync(async (req, res) => {
  const projectInfo: TProject = req?.body
  const result = await projectServices.saveProjectOnDB({
    ...projectInfo,
    projectImage: req?.file?.path
  })
  sendResponse(res, {
    message: 'Project created successfully',
    data: result,
    statusCode: status.CREATED
  })
})

const getAllProject = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjectFromDb()
  sendResponse(res, {
    message: 'Project retirve successfully',
    data: result,
    statusCode: status.OK
  })
})
const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req?.params
  const result = await projectServices.getSingleProjectFromDB(id)
  sendResponse(res, {
    message: 'Project retirve successfully',
    data: result,
    statusCode: status.OK
  })
})

export const projectControllers = {
  createProject,
  getAllProject,
  getSingleProject
}
