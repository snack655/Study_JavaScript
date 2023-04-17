const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.initiate(
            {
                name: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull:false
                },
                married: {
                    type:Sequelize.BOOLEAN,
                    allowNull:false,
                },
                comment: {
                    type: Sequelize.TEXT,
                    allowNull:true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW
                },
            },
            {
                sequelize,
                timestamps:false,
                underscored:false,
                modelName: 'User',
                tableName: 'users',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {}
}