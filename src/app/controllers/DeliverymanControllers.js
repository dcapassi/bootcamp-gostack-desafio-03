import Deliveryman from '../models/deliveryman';
import * as Yup from 'yup';

class DeliverymanController {
  async store(req, res) {
    //Input Validation
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email } = req.body;
    const alreadyExist = await Deliveryman.findAll({
      where: {
        email: email,
      },
    });

    console.log(alreadyExist);

    if (alreadyExist == true) {
      return res.status(400).json({ error: 'User already exist' });
    }

    const deliveryman = await Deliveryman.create(req.body);
    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
