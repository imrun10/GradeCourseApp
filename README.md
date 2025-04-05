# Grade Course App

This is a grade management application for AUBH following the SCRUM methodology. The tools used were React.js, Node.js, Express.js, and MySQL. The project covered all parts of a web app, from the database to the frontend, and Git was used to keep track of the different versions of the app.

![CMPE 460 - Grading System](https://github.com/imrun10/GradeCourseApp/assets/64099678/b8359829-9059-4d18-8f0c-f2e5213ea095)

## Table of Contents

- Installation
- Usage
- Project Structure
- API Endpoints
- Database Schema
- Contributing
- License

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/imrun10/GradeCourseApp.git
    cd GradeCourseApp
    ```

2. Install dependencies for the client and server:
    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up the MySQL database:
    - Create a database named `GradingSystem`.
    - Import the SQL files in the following order:
        - GradingSystem_account.sql
        - GradingSystem_Simplified.sql
        - GradingSystem_Sample.sql
        - Procedures.sql
        - Procedures(2).sql
        - users.sql

4. Create a `.env` file in the server directory and add the following:
    ```env
    JWT_KEY=your_jwt_secret_key
    MYSQL=mysql_key
    ```

5. Start the server:
    ```sh
    cd server
    npm start
    ```

6. Start the client:
    ```sh
    cd client
    npm start
    ```

## Usage

- Navigate to `http://localhost:3000` to access the application.
- Use the login page to sign in or register a new account.
- Once logged in, you can view and manage courses, students, and assignments.

## Project Structure

```
.gitattributes
.gitignore
client/
    .gitignore
    package.json
    public/
        favicon.ico
        index.html
        logo192.png
        logo512.png
        manifest.json
        robots.txt
    src/
        App.css
        App.js
        components/
        pages/
        ...
CODE_OF_CONDUCT.md
CONTRIBUTING.md
debug.sql
GradeAppdb.mwb
GradingSystem_account.sql
GradingSystem_Sample.sql
GradingSystem_Simplified.sql
LICENSE
Procedures.sql
Procedures(2).sql
README.md
server/
    .env
    .gitignore
    connection.js
    package.json
    server.js
users.sql
```

## API Endpoints

### Authentication

- `POST /api/register` - Register a new user.
- `POST /api/login` - Login a user.

### Students

- `GET /api/student` - Get students for a specific course.
- `GET /api/studentDetails` - Get detailed student information.
- `GET /api/studentSummaryStudent` - Get student summary.
- `GET /api/studentSummaryAssignments` - Get student assignment summary.

### Courses

- `GET /api/course` - Get courses for a specific user.
- `GET /api/course/all` - Get all courses.
- `GET /api/courseSummaryData` - Get course summary data.

### Assignments

- `POST /api/save` - Save assignment data.
- `GET /api/checkArray` - Check if the array is empty.

## Database Schema

The database schema includes the following tables:

- `Users`
- `Account`
- `Student`
- `Faculty`
- `Course`
- `CourseSection`
- `StudentSection`
- `CourseAssignment`
- `StudentGrade`
- `Assignments`

## Contributing

We welcome contributions! See the [CONTRIBUTING](CONTRIBUTING.md) file for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
