import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
});

const fetchComputerCourses = async () => {
    try {
        const query = `
            SELECT * 
            FROM Courses 
            WHERE CourseTitle LIKE '%Computer%' 
               OR CourseTitle LIKE '%Computing%'`;
        const [rows] = await connection.execute(query);
        return rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch computer-related courses.");
    }
};

const fetchDesignCourses = async () => {
    try {
        const query = `
            SELECT * 
            FROM Courses 
            WHERE CourseTitle LIKE '%Design%'`;
        const [rows] = await connection.execute(query);
        return rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch design-related courses.");
    }
};

export { fetchComputerCourses, fetchDesignCourses };