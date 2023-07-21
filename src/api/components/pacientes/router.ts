import  { Router} from 'express'
import { PatientController, PatientContollerImpl } from './controller'
import { PatientRepository } from './repository'
import { PatientServiceImpl } from './service'


const router = Router()
const repository = new PatientRepository()
const service = new PatientServiceImpl(repository)
const controller: PatientController = new PatientContollerImpl(service)


router.get('',  controller.getAllPatient.bind(controller))
router.post('/create',  controller.createPatient.bind(controller))
router.get('/:id',  controller.getPatientById.bind(controller))

export default router