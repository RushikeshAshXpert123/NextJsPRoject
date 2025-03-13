// graphql/resolvers.js
import { connectToDatabase } from '../lib/mongodb';
import Location from '../models/Location';
import Hostel from '../models/Hostel';

export const resolvers = {
  Query: {
    locations: async () => {
      await connectToDatabase();
      return await Location.find({});
    },
    hostels: async (_, { locationId }) => {
      await connectToDatabase();
      return await Hostel.find({ locationId });
    },
    hostelCounts: async () => {
      await connectToDatabase();
      const locations = await Location.find({});
      const counts = await Promise.all(locations.map(async (loc) => {
        const count = await Hostel.countDocuments({ locationId: loc._id });
        return { location: loc, count };
      }));
      return counts;
    },
  },
};
