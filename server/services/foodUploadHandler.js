import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
const multerStorage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,uuidv4()+Date.now()+path.extname(file.originalname));
    },
    destination:(req,file,cb)=>{
        cb(null,"uploads/foodUploads");
    }
})

const foodUploads = multer({storage:multerStorage});

export default foodUploads;