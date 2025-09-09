/*
Example object:
{"id":2,
"documentId":"rkbvso217w9e5ehyxzjxumiv",
"Name":"Green Routine",
"Description":"Challenge app that promotes environmental inititives by telling the user their carbon emissions",
"link":"https://github.com/TheGitGang/GreenRoutine","createdAt":"2025-09-02T05:09:19.483Z","updatedAt":"2025-09-02T05:09:19.483Z","publishedAt":"2025-09-02T05:09:19.526Z"}
*/
export default interface project {
    id: number, 
    documentId: string,
    Name: string, 
    Description: string,
    link: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
}