import { Router } from 'express';
let router = Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/adminds', function(req, res, next) {
  res.status(200).json({
       succes:true,
       admins:[]
  })
});

// router.get('/adminds',(req,res,next)=>res.status(200).json)({
//   succes:true,
//   admins:[]
// })
  

export default router;
// module.exports = router;
