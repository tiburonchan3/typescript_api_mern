import {Schema,Model, model} from 'mongoose'

const videSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique:true
    }
}, {
    versionKey:false,
    timestamps:true
})

export default model('Video',videSchema)
