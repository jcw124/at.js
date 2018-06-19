module.exports = function(sequelize, DataTypes) {
    var SignUps = sequelize.define("SignUps", {
      // id not needed per Omar
      // id: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      signUpName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      signUpMobile: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      signUpEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }
      //timestamps not needed per Omar ... says automatically created?
      // // Timestamps
      // createdAt: DATE, //createdAt: Sequelize.DATE,
      // updatedAt: DATE,
    });
    return Event;
  }


  module.exports = function(sequelize, DataTypes) {
    var artists = sequelize.define("artists", {
      // id not needed per Omar
      // id: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      groupName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      contactEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      contactPhone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      personalWebsite: {
        type: DataTypes.STRING,
      },
      instagramLink: {
        type: DataTypes.STRING,
      },
      facebookLink: {
        type: DataTypes.STRING,
      },
      spotifyLink: {
        type: DataTypes.STRING,
      },
      twitterLink: {
        type: DataTypes.STRING,
      },
      soundcloudLink: {
        type: DataTypes.STRING,
      },
      youtubeLink: {
        type: DataTypes.STRING,
      },
      appleMusicLink: {
        type: DataTypes.STRING,
      },
      otherLink1: {
        type: DataTypes.STRING,
      },
      otherLink2: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      },
      upcomingProjects: {
        type: DataTypes.STRING,
      }
      //timestamps not needed per Omar ... says automatically created?
      // // Timestamps
      // createdAt: DATE, //createdAt: Sequelize.DATE,
      // updatedAt: DATE,
    });
    return Event;
  }
