const {Router} =require ('express')
const router = Router()
const PostCtrl = require('../controllers/Post.controller')

router.post('/crear', PostCtrl.crearPost)
router.get('/listar', PostCtrl.listarPost)
router.get('/', PostCtrl.listarPost)
router.put('/actualizar/:id', PostCtrl.actualizarPost)

module.exports=router  