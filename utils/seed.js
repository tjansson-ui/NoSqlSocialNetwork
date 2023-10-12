const connection = require("../config/connection")
const {} = require("../models")
const userData = require("")
const thoughtData = require("")

connection.once("open", async () => {
    try {
        await User.deleteMany({})
        await Thought.deleteMany({})

        const users = await User.create(userData)
        
        for (const thought of thoughtData) {
            const randomIndex = Math.floor(Math.random * users.length)
            const randomUser = users[randomIndex]

            const thoughtWithUsername = {...thought, username: randomUser.username}
            const newThoguht = await Thought.create(thoughtWithUsername)

            await User.findbyIDAndUpdate(randomUser._id, {$push: {thoughts: newThoguht._id }})
        }
    
        process.exit(0)
    } catch(err) {
        process.exit(1)
    }
})