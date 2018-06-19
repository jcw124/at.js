
module.exports = function(sequilize, DataType) {
    let artists = sequelize.define('artists', {
        groupName: {
            type: DataTypes.CHAR,
            allowNull: false,
            validate: {
              len: [1]
            }
        }, 
        contactName:  {
            type: DataTypes.CHAR,
            allowNull: false,
            validate: {
              len: [1]
            }
        }, 
        contactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        }, 
        contactPhone:  {
            type: DataTypes.STRING
        }, 
        personalWebsite:    {
            type: DataTypes.STRING
        }, 
        instagramLink:   {
            type: DataTypes.STRING
        }, 
        facebookLink:   {
            type: DataTypes.STRING
        }, 
        spotifyLink:    {
            type: DataTypes.STRING
        }, 
        twitterLink:    {
            type: DataTypes.STRING
        }, 
        soundcloudLink:    {
            type: DataTypes.STRING
        }, 
        youtubeLink:    {
            type: DataTypes.STRING
        }, 
        appleMusicLink:    {
            type: DataTypes.STRING
        }, 
        otherLink1:   {
            type: DataTypes.STRING
        }, 
        otherLink2:    {
            type: DataTypes.STRING
        }, 
        comments:  DataTypes.TEXT,
        upcomingProjects: DataTypes.TEXT,
        lastUpdateDate:   {
            type: DataTypes.DATE
        },
        active:    {
            type: Boolean
        }
    });
    return artists;
};
