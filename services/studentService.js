import * as studentModel from '../models/studentModels.js';

export const fetchAllStudents = async () => {
    const students = await studentModel.fetchAllStudents();
    return students;
};

export const createStudent = async (student) => {
    const studentId = await studentModel.insert(student);
    return studentId;
}