const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected.");
})

const random = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const price = Math.floor(Math.random() * 30 + 10);
        const newCity = random(cities);
        const camp = new Campground({
            title: `${random(descriptors)} ${random(places)}`,
            location: `${newCity.city}, ${newCity.state}`,
            images: [
                {
                    url: `https://source.unsplash.com/random/600x600?nature,${i}-0`,
                    filename: `campground${i}-0`
                },
                {
                    url: `https://source.unsplash.com/random/600x600?nature,${i}-1`,
                    filename: `campground${i}-1`
                }
            ],
            geometry: {
                type: "Point",
                coordinates: [newCity.longitude, newCity.latitude]
            },
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit!',
            price,
            author: '64c30bbe4c5d2efaeaa73ad7'
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Connection closed");
})

