import {RequestHandler} from 'express'
import Video from './video'

export const getVideos: RequestHandler = async (req,res) => {
   try {
    const videos = await Video.find()
    return res.json(videos)
   } catch (error) {
       res.json(error)
   }
}

export const createVideo: RequestHandler = async (req,res) => {
    const videoFound = await Video.findOne({url:req.body.url})
    if(videoFound){
        return res.status(301).json({message: 'The url has already exists'})
    }
    const video = new Video(req.body)
    const videoSaved = await video.save()
    res.json(videoSaved)
}

export const deleteVideos: RequestHandler = async (req,res) => {
    const video = await Video.findByIdAndDelete(req.params.id)
    if(!video) return res.status(204).json()
    return res.json({message:"the video is deleted"})
}

export const updateVideos: RequestHandler = async (req,res) => {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body,{new:true})
    if(!video) return res.status(204).json()
    return res.json(video)
}

export const getVideo: RequestHandler = async (req,res) => {
    const video = await Video.findById(req.params.id)
    if(!video) {
        return res.status(204).json()
    }
    return res.json(video)
}
