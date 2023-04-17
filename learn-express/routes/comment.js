const Sequelize = require('sequelize');

class Commnet extends Sequelize.Model {
    static initiate(sequelize) {
        Comment.init(
            {
                commnet: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: true,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                timstamps: false,
                modelName: 'Comment',
                tableName: 'comments',
                paranoid: false,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci',
            }
        );
    }
    static associate(db) {
        db.User.hasMany(db.Commnet, {foreignKey:'commenter', sourceKey: 'id'});
    }
}

module.exports = User;