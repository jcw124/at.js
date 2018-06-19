console.log("the user model is connected");

'use strict';
const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
    let User = sequelize.define('WhoBeDo', {
        userName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [6]
          }
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        // The password cannot be null
        password: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        classMethods: {
          associate: function(models) {
            // associations can be defined here
            User.hasMany(models.event, {
                onDelete: "cascade"
            });
          }
        },
        instanceMethods: {
          validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
          }
        },
        // Hooks are automatic methods that run during various phases of the User Model lifecycle
        // In this case, before a User is created, we will automatically hash their password
        hooks: {
          beforeCreate: function(user, options, cb) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            cb(null, options);
          }
        }
      });
      return User;

////////////////////////////////////////////////
};