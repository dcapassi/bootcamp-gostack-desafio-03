import Recipient from '../models/Recipient';
import * as Yup from 'yup';

class DeliverymanController {
  async store(req, res) {
    //Input Validation
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email } = req.body;

    return res.json({ name, email });
  }
}

export default new DeliverymanController();
