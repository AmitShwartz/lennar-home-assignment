# Lennar Home Assignment

## Architecture Design

Our application consists of both front-end and back-end services. Your task is to design a software architecture to manage files across the system.

- You are not required to write any code for this assignment.
- The system should support multiple document types, including images, videos, and text.
- The application will be a web-based solution.
- The architecture should be designed to run on a cloud service, preferably AWS.

Please provide a high-level description of the interfaces, databases, and services, and consider potential failure scenarios.

## Table of Contents

- [Architecture](#architecture)
- [Contact](#contact)

## Architecture

This design will include solutions to control the system file with REST API and user authentication to ensure the system is secure, a database for managing the files' metadata and user profiles, queuing solutions for data integrity, and a web application to manage the file system.

### Technologies

1. Node.js for the server
2. AWS S3 bucket for storing multiple document types
3. Amazon RDS (PostgreSQL) for saving metadata related to the uploaded files and user profiles
4. Amazon SNS/SQS for messaging and queuing services
5. AWS Lambda for processing files and other asynchronous tasks
6. React for the application

### Interface

In the application, the user will have the following options:

1. Upload a new file
2. Delete a file
3. Download a file
4. View a list of files
5. Log in

### Service

The service will integrate with the AWS S3 bucket and will save changes to the db.

API Endpoints:

1. `POST /upload` - Upload a new file.
2. `GET /files` - List all files.
3. `GET /file/{id}` - Download a specific file.
4. `DELETE /file/{id}` - Delete a specific file.

### Potential Failure Scenarios

1. **File Upload Failure**

   - **Reason:** Service down, latency issues, and more.
   - **Solution:** Implement retry mechanisms and provide user feedback.

2. **Database Failure**

   - **Reason:** Latency, low availability.
   - **Solution:** Use replication.

3. **Service Unavailability**

   - **Solution:** Use auto-scaling solutions.

4. **Data Loss**
   - **Solution:** Implement versioning and backups solutions.

## Contact

For questions, feedback, or support, contact [Amit Shwartz](mailto:shwartzamit17@email.com).
