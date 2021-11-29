const PostCtrl= {}
const Post = require ('../models/Post.models')
//const bcrypt =  require('bcryptjs')
//const jwt = requiere('jsonwebtoken')

PostCtrl.crearPost =  async(req,res)=>{
    const {desc,photo,userId,like,comment} = req.body
    const NuevoPost = new Post({
        desc,
        photo,
        userId,
        like,
        comment
    })

    await NuevoPost.save()
    res.json({
        mensaje: 'Poster agregado',
        desc : NuevoPost.desc,
        photo: NuevoPost.photo,
        userId: NuevoPost.userId,
        like: NuevoPost.like,
        comment: NuevoPost.comment
    })
}

PostCtrl.listarPost =  async(req,res)=>{
    const listados = await Post.find()
    res.json(listados)

}
PostCtrl.actualizarPost =  async(req,res)=>{
    const id = req.params.id
    await Post.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje : 'Post Actualizado'
    })

}


module.exports=PostCtrl

