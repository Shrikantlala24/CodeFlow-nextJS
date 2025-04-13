import { serverConfig } from '../config/config';

export class SampleService {
  // Sample method to demonstrate service layer functionality
  static async getSampleData() {
    try {
      // Simulate database operation
      const data = {
        id: 1,
        name: 'Sample Data',
        description: 'This is a sample data entry',
        createdAt: new Date().toISOString()
      };
      
      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error in getSampleData:', error);
      throw new Error('Failed to fetch sample data');
    }
  }

  // Add more service methods here
}