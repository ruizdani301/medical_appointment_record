import { Router } from 'express';
import { User} from '../models/UserSchema.js';
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

router.put('/', (req, res) => { });

router.delete('/', (req, res) => { });


export default router;