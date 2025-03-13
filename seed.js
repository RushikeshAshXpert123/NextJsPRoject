// seed.js
import mongoose from 'mongoose';
import { connectToDatabase } from './src/lib/mongodb.js';
import Location from './src/models/Location.js';
import Hostel from './src/models/Hostel.js';

// Function to generate a random number within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seed() {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Clear existing data (optional)
    await Location.deleteMany({});
    await Hostel.deleteMany({});

    // Dummy data for locations
    const locationsData = [
      { name: "Delhi", image: "/imgs/Delhi.png" },
      { name: "Mumbai", image: "/imgs/mumbai.png" },
      { name: "Bangalore", image: "/imgs/Bangalore.png" },
      { name: "Kolkata", image: "/imgs/Kolkata.png" },
      { name: "Chennai", image: "/imgs/Chennai.png" },
    ];

    // Assign a random hostel count to each location
    locationsData.forEach((location) => {
      location.count = getRandomInt(2, 6); // Random number of hostels between 2 and 6
    });

    // Insert locations into the database
    const insertedLocations = await Location.insertMany(locationsData);
    console.log("Inserted Locations:", insertedLocations);

    // Create hostels based on hostelCount for each location
    const hostelsData = [];
    insertedLocations.forEach((location) => {
      for (let i = 1; i <= location.count; i++) {
        hostelsData.push({
          locationname: `${location.name}`,
          name: `${location.name} Hostel ${i}`,
          image: `${location.image}?text=${encodeURIComponent(location.name + " Hostel " + i)}`,
          locationId: location._id,
        });
      }
    });

    // Insert hostels into the database
    const insertedHostels = await Hostel.insertMany(hostelsData);
    console.log("Inserted Hostels:", insertedHostels);

    console.log("Database seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the connection when done
    mongoose.connection.close();
  }
}

seed();
