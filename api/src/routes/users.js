import { Router } from 'express';
import { User } from '../models/UserSchema.js';
const router = Router();

router.get('/', (req, res) => { });

router.post('/', async (req, res) => {
  const params = req.body;

  if (!params.DocumentID || !params.Name || !params.LastName || !params.Email || !params.Password) {
    return res.status(400).json({ message: 'Missing data' });
  }
  try {
    const user = await User.create(params);
    user.save();
    return res.status(200).json({ message: 'User created' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


// Si es put permite repetir datos??
router.put('/', async (req, res) => {
  const { DocumentID, ...params }= req.body;

  if (!DocumentID || !params)
      return res.status(400).json({ message: 'Missing data' });

  try {
    if (!await User.findOne({ DocumentID: { $eq: DocumentID } }))
      return res.status(404).json({ message: 'User not found' });

    await User.updateOne({ DocumentID }, { $set: params });
    return res.status(200).json({ message: 'User update' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});


router.delete('/', async (req, res) => {
  const params = req.body.DocumentID;
  try {
    const user = await User.findByDocumentIdDelete({DocumentID: params});
    if(!user){
      res.json({
        message: "sin coincidencia"
      })
    }
    else {
      res.json({
        message: "eliminado"
      })
    }
  }catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;