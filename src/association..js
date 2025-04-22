const User = require('./models/userModel.js');  
const Identification = require('./models/identificationModel.js');
const PersonalInfo = require('./models/personalInfoModel.js');
const Qualification = require('./models/qualificationModel.js');
const Job = require('./models/jobModel.js');
const Application = require('./models/applicationModel.js')


User.hasOne(PersonalInfo,{
    foreignKey: {
        as: 'personal-info',
        name: 'user_id',
        allowNull: false
      },
      onDelete: 'CASCADE'
});
PersonalInfo.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
});

User.hasOne(Identification,{
    foreignKey: {
        as: 'identification',
        name: 'user_id',
        allowNull: false
      },
      onDelete: 'CASCADE'
});
Identification.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
});

User.hasOne(Qualification,{
    foreignKey: {
        as: 'qualifications',
        name: 'user_id',
        allowNull: false
      },
      onDelete: 'CASCADE'
});
Qualification.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
});

User.hasMany(Application,{
    foreignKey: 'user_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Application.belongsTo(User,{
    foreignKey: 'user_id',
});

Job.hasMany( Application,{
    foreignKey: 'job_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Application.belongsTo(Job,{
    foreignKey: 'job_id',
});