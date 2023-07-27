import * as VideoControllers from './../controllers/VideoController.js'

import { Router } from "express";
const VideoRouter = Router()

VideoRouter.route('/').post(VideoControllers.addVideo)


export default VideoRouter