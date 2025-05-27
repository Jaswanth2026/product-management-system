import mysql from "mysql2";

// Load from environment or fallback defaults
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'product_management_system'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('✅ Connected to MySQL as id ' + connection.threadId);
});

export default connection;
