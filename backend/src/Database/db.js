const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://phoenix:phoenix123123@cluster0.xxzcy0x.mongodb.net/go_food?retryWrites=true&w=majority'


const mongodb = async () => {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(async () => {
            console.log('Connected to MongoDB');
            // Your app setup or operations after successful connection
            const fetched_data = await mongoose.connection.db.collection('food_items')
            fetched_data.find({}).toArray()
                .then(data => { 
                    global.food_items = data
                })

            const food_category_data = await mongoose.connection.db.collection('food_category')
            food_category_data.find({}).toArray()
                .then(data => {
                    global.food_category = data
                })

        })
        .catch(error => {
            console.error('Error connecting to MongoDB:', error);
        });
    
}

module.exports = mongodb 