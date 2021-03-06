import express from "express";
// import { route } from "express/lib/router";
import HomeController from "../controllers/HomeController";
import UserController from "../controllers/userController";
import SubjectController from "../controllers/subjectController";
import TeacherController from "../controllers/TeacherController";
import NewsController from "../controllers/newsController";
import ClassController from "../controllers/ClassController";
import TeachingController from "../controllers/TeachingController";
import PointsController from "../controllers/PointsController";
import adminController from "../controllers/adminController";

let Router = express.Router();

let initWebRouter = (app) => {
    Router.get('/', HomeController.getHomePage);
    Router.get('/test', HomeController.getTestPage);
    Router.get('/crud', HomeController.getCRUD);
    Router.post('/post-crud', HomeController.postCrud);
    Router.get('/get-crud', HomeController.displayCRUD);
    Router.get('/edit-crud', HomeController.getEditCRUD);
    Router.post('/put-crud', HomeController.putCRUD);
    Router.get('/delete-crud', HomeController.deleteCRUD);


    Router.post('/api/login', UserController.handleLogin);
    Router.get('/api/get-all-users', UserController.handleGetAllUsers);
    Router.post('/api/create-new-user', UserController.handleCreateNewUser);
    Router.put('/api/edit-user', UserController.handleEditUser);
    Router.delete('/api/delete-user', UserController.handleDeleteUser);
    Router.get('/api/allcode', UserController.getAllCode);
    Router.get('/api/subject-home', SubjectController.getSubject);
    Router.get('/api/HocSinh-home', SubjectController.getHocSinh);
    Router.get('/api/Get-Student-by-class', UserController.getStudentByClass)


    //teacher api
    Router.post('/api/login-teacher', TeacherController.handleLogin);
    Router.get('/api/get-all-teacher', TeacherController.handleGetAllTeachers);
    Router.post('/api/create-new-teacher', TeacherController.handleCreateNewTeacher);
    Router.delete('/api/delete-teacher', TeacherController.handleDeleteTeacher);
    Router.put('/api/edit-teacher', TeacherController.handleEditTeacher);
    Router.post('/api/infor-teacher', TeacherController.handleInforTeacher);
    Router.get('/api/get-detail-teacher-by-id', TeacherController.handleGetDetailTeacher);
    Router.get('/api/get-teacher-by-subject', TeacherController.handleGetTeacherBySubject);

    //tin t???c
    Router.get('/api/get-all-news', NewsController.handleGetAllNews);
    Router.post('/api/create-news', NewsController.handleCreateNews);
    Router.delete('/api/delete-news', NewsController.handleDeleteNews);
    Router.put('/api/edit-news', NewsController.handleEditNews);

    //class
    Router.get('/api/get-all-class', ClassController.handleGetAllClass);
    Router.post('/api/create-class', ClassController.handleCreateClass);
    Router.delete('/api/delete-class', ClassController.handleDeleteClass);
    Router.put('/api/edit-class', ClassController.handleEditClass);
    Router.put('/api/edit-teaching', ClassController.handleEditTeaching)

    //Teaching
    Router.post('/api/create-teaching', TeachingController.handleCreateTeaching);
    Router.get('/api/get-teacher-by-class', TeachingController.handleGetTeacherByLop);
    Router.get('/api/get-name-subject', TeachingController.handleGetNameSubject);
    Router.get('/api/get-teacher-all', TeachingController.handleGetAll);

    Router.get('/api/get-chairman', TeachingController.handleGetChairman);
    Router.get('/api/get-all-chairman', TeachingController.handleGetAllChairman);
    Router.put('/api/edit-chairman', TeachingController.handleEditChairman);
    Router.get('/api/get-class-by-teacher', TeachingController.handleClassByTeacher);


    //points
    Router.get('/api/get-student-by-class', PointsController.handleStudentByClass);
    Router.post('/api/save-points', PointsController.handleSavePoints);
    Router.get('/api/get-all-points', PointsController.handleGetAllPoints);
    Router.get('/api/get-points-student-by-class', PointsController.handleGetPointsStudentByClass);
    Router.get('/api/get-point-student', PointsController.handleGetPointsStudent);


    //????ng nh???p admin
    Router.post('/api/login-admin', adminController.handleLogin)
    return app.use("/", Router);
}

module.exports = initWebRouter;