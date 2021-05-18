require('dotenv').config();

const Sequelize = require('sequelize');

// DATABSE ACCESS AND MODEL DEFINITIONS

const Model = new Sequelize(
    // Database or Local Machine
    process.env.DB || 'localhost',
    // Username
    process.env.UN,
    // Password
    process.env.PD, 
    {
        // Host name
        host: process.env.HT,
        dialect: 'mysql',
        pool: {
            min: 0,
            max: 10
        }
    }
);

// Model for Users

const User = Model.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    admin: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    department: {
        // make a object with question and answer
        type: Sequelize.STRING,
        allowNull: false,
    },
    recovery: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    schedule: {
        // an array of object of day and time properties
        type: Sequelize.STRING,
        allowNull: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    workSettings: {
        type: Sequelize.STRING,
        allowNull: true,
    }
    

});

const ChatRoom = Model.define('chatrooms', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // FOR THE CLIENT SIDE THIS SHOULD RECEIVE A JSON OBJECT 
    // THAT KEEPS A ARRAY OF THE CHATS
    posts: {
        type: Sequelize.STRING(65000),
        allowNull: false,
    }, 
    owner: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Tasks = Model.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timeSchedule: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comments: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// synchronize a file's in-core state with the underlying storage device
// Sequelize will create this database if doesn't exist already

Model.sync().then(() => {
    console.log('Database synced')
}).catch((err) => {
    console.log(err)
    console.log("Error creating Database")
});

exports = module.exports = {
    User, ChatRoom
}