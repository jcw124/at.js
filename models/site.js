module.exports = function(sequelize, DataTypes) {
    const SignUps = sequelize.define("SignUps", {
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
    });
    return SignUps;
  }

  module.exports = function(sequelize, DataTypes) {
    const artists = sequelize.define("artists", {
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
     
    });
    return artists;
  }
