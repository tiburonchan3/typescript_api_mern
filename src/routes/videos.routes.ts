import {Router} from 'express'
import * as videoCtrl from './videoController'
const router = Router();

router.get('/videos',videoCtrl.getVideos)

router.post('/videos',videoCtrl.createVideo)

router.get('/videos/:id',videoCtrl.getVideo)

router.delete('/videos/:id',videoCtrl.deleteVideos)

router.put('/videos/:id',videoCtrl.updateVideos)

export default router
