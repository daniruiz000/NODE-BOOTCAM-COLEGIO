import { Subject, ISubject, ISubjectCreate } from "../entities/subject-entity";
import { Document } from "mongoose";

const getAllSubjects = async (page: number, limit: number): Promise<ISubject[]> => {
  return await Subject.find()
    .limit(limit)
    .skip((page - 1) * limit);
};

const getSubjectCount = async (): Promise<number> => {
  return await Subject.countDocuments();
};

const getSubjectById = async (id: string): Promise<Document<ISubject> | null> => {
  return await Subject.findById(id).populate(["teacher", "classroom"]);
};

const getSubjectsByClassroomId = async (classroomId: string): Promise<ISubject[]> => {
  return await Subject.find({ classroom: classroomId })
};

const createSubject = async (subjectData: ISubjectCreate): Promise<Document<ISubject>> => {
  const subject = new Subject(subjectData);
  const document: Document<ISubject> = await subject.save() as any;

  return document;
};

const createSubjectsFromArray = async (subjectList: ISubjectCreate[]): Promise<void> => {
  for (let i = 0; i < subjectList.length; i++) {
    const subject = subjectList[i];
    await subjectOdm.createSubject(subject);
  }
};

const deleteSubject = async (id: string): Promise<Document<ISubject> | null> => {
  return await Subject.findByIdAndDelete(id);
};

const deleteAllSubject = async (): Promise<boolean> => {
  return await Subject.collection.drop()
};

const updateSubject = async (id: string, subjectData: ISubjectCreate): Promise<Document<ISubject> | null> => {
  return await Subject.findByIdAndUpdate(id, subjectData, { new: true, runValidators: true });
};

export const subjectOdm = {
  getAllSubjects,
  getSubjectCount,
  getSubjectById,
  getSubjectsByClassroomId,
  createSubject,
  createSubjectsFromArray,
  deleteSubject,
  deleteAllSubject,
  updateSubject,
};
