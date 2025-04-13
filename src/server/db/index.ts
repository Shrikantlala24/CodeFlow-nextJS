import { Pool, PoolConfig } from 'pg';
import { serverConfig } from '../config/config';
import { DatabaseError } from '../utils/errors';

const poolConfig: PoolConfig = {
  host: serverConfig.db.host,
  port: serverConfig.db.port,
  database: serverConfig.db.database,
  user: serverConfig.db.user,
  password: serverConfig.db.password,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
};

const pool = new Pool(poolConfig);

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  throw new DatabaseError('Database connection error');
});

// Handle successful connections
pool.on('connect', () => {
  console.log('Database connected successfully');
});

// Handle client removal
pool.on('remove', () => {
  console.log('Client removed from pool');
});

// Test the connection
pool.query('SELECT NOW()')
  .then(() => console.log('Database connection test successful'))
  .catch((err) => {
    console.error('Database connection test failed:', err);
    throw new DatabaseError('Failed to connect to database');
  });

export default pool;