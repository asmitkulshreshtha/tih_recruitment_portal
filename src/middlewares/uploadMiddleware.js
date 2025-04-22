const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename:(req, file , cb) =>{
        cb(null, `${req.user.userId}-${Date.now()}-${file.originalname}`);
    }  
});

const fileFilter = (req, file, cb) =>{
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error('Invalid file type. Only jpeg, jpg and pdf file type allowed.'));
    }
};

const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:5 * 1024 * 1024 // 5MB
    }
});

module.exports = upload;