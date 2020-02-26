import Sequelize, { Model } from 'sequelize';

class deliveryman extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        avatar_id: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );

    return this;
  }
}

export default deliveryman;
