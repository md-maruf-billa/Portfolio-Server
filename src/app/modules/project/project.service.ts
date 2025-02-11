import { TProject } from './project.interface'
import { ProjectModel } from './project.schema'

const saveProjectOnDB = async (payload: TProject) => {
  const result = await ProjectModel.create(payload)
  return result
}

const getAllProjectFromDb = async () => {
  const result = await ProjectModel.find()
  return result
}

const getSingleProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findById(id)
  return result
}

export const porjectServices = {
  saveProjectOnDB,
  getAllProjectFromDb,
  getSingleProjectFromDB
}
