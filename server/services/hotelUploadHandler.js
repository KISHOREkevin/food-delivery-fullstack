import multer from "multer";
import {v4 as uuidv4} from "uuid";
import path from "path";
const multerStorage=multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,uuidv4()+Date.now()+path.extname(file.originalname));
    },
    destination:(req,file,cb)=>{
        cb(null,"uploads/hotelUploads");
    }

})

const hotelUploads = multer({storage:multerStorage});
export default hotelUploads;
