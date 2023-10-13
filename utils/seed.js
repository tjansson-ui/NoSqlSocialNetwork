const connection = require("../config/connection")
const { User, Thought } = require("../models")

const userData = require("./userData.json")
const thoughtData = require("./thoughtData.json")

connection.once("open", async () => {
    try {
        await User.collection.deleteMany({})
        await Thought.collection.deleteMany({})

        await User.collection.insertMany(userData)
        await Thought.collection.insertMany(thoughtData)

    // Future potential changes
        // for (const thought of thoughtData) {
        //     const randomIndex = Math.floor(Math.random * users.length)
        //     const randomUser = users[randomIndex]

        //     const thoughtWithUsername = {...thought, username: randomUser.username}
        //     const newThought = await Thought.create(thoughtWithUsername)

        //     await User.findbyIDAndUpdate(randomUser._id, {$push: {thoughts: newThought._id }})
        // }
    
        process.exit(0)
    } catch(err) {
        process.exit(1)
    }
})