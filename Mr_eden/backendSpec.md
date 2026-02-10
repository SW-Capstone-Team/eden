# Backend API Specification

## pre-note. 이미지 전송은 방법은 url 주면 됨

## 1. 인증 API

### 1.1. 로그인

```
POST /api/auth/login
Request:
{
    "id": string,
    "password": string
}
Response:
{
    "token": string,
    "user": {
        "id": string,
        "name": string,
        "type": "학생" | "교사",
        "school": string,
        "logo": image
    }
}
```

### 1.2. 회원가입

```
POST /api/auth/register
Request:
{
    "id": string,
    "password": string,
    "name": string,
    "email": string,
    "school": string,
    "birthdate": string,
    "userType": "학생" | "교사"
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 1.3. 아이디 중복 확인
```
POST /api/auth/checkIdPrimary
Request:
{
    "id": string
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 1.4. 이메일 인증번호 요청
```
POST /api/auth/requestEmailVerifyNumber
Request:
{
    "email": string,
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 1.5. 이메일 인증
```
POST /api/auth/verifyEmail
Request:
{
    "email": string
    "verifyNumber": string
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 1.6. 아이디 변경
```
POST /api/auth/changeId
Request:
{
    "newId": string
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 1.7. 비밀번호 변경
```
POST /api/auth/changePassword
Request:
{
    "newPassword": string
}
Response:
{
    "success": boolean,
    "message": string
}
```

## 2. 과목 API

### 2.1. 홈 화면 할 일 목록 조회

```
GET /api/todo
Request:
{
    "token": string
}
Response:
{
    "todo": [
        {
            "subjectname": string,
            "name": string,
            "todo" : string,
            "restDays" : number,
            "restTime" : number
        }
    ]
}
```

- note. 1일 이내로 남았으면 restDays를 0으로 하고 restTime에 값을 넣음. 아니라면 반대로
        todo에는 해당 할 일에 대한 정보를 "주제발표 과제 제출", "쪽지시험"과 같이 간단히 명시
        여기에는 과제, 시험 등이 포함 : restDays | restTime


### 2.2. 과목 조회

```
GET /api/subjects/subjectNormal
Request:
{
    "token": string
}
Response:
{   
    "subjects": [
        {
            "subjectName": string,
            "teacher": string,
            "classId": sting
        }
    ]
}
```

### 2.3. 과목 상세 조회

```
GET /api/subjects/subjectDetail
Request:
{
    "token": string,
    "subjectCode": string
}
Response:
{
    "subjectName": string,
    "teacher": string,
    "currentQuizExists": boolean,
    "summerizedDocuments": [
        {
            "summerizedImage": image,
            "description": string,
            "uploadedDate": string,
            "summerizedDocumentId" : number
        }
    ],
    "quizSchedule": [
        {
            "quizName": string,
            "time" : string,
            "date" : string,
            "quizId" : number
        }
    ],
    "evaluationCompleteQuiz" : [
        {
            "quizName": string,
            "userScore": number,
            "totalScore": number, 
            "time": string,
            "date": string,
            "quizId": number
        }
    ],
    "assignmentSchedule": [
        {
            "assignmetName": string,
            "time": string,
            "date": string
            "assignmentId": number
        }
    ],
    "submittedAssignments": [
        {
            "assignmentName": string,
            "userScore": number,
            "totalScore": number, 
            "time": string,
            "date": string,
            "assignmentId": number
        }
    ]
    "currentGrade": double
}
```
- note. "summerizedDocumentId"는 string으로 하고 싶으면 그렇게 해도 됨
        그리고 해당 과목에 해당 유저가 있는지 확인하고 정보 줘야 할 듯

### 2.4. 과목 참여

```
POST /api/subjects/join
Request:
{
    "token": string,
    "subjectCode": string
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 2.5. 학습 자료 상세보기
```
POST /api/subjects/summerizedDocument/detailView
Request:
{
    "token": string,
    "subjectCode": string,
    "summerizedDocumentId" : number
}
Response:
{
    "summerizedDocument" : string
}
```

### 2.6. 퀴즈 상세보기
```
POST /api/subjects/quiz/detailView
Request:
{
    "token": string,
    "subjectCode": string,
    "quizId": number
}
Response:
{
    "totalQuizNumber": number,
    "quiz": [
        {
            "quizType": number,
            "quizNumber: number,
            "quizContent": string,
            "quizChoices": [
                "first": string,
                "second": string,
                "third": string,
                "fourth": string,
                "fifth": string
            ]
        }
    ]
}
```

- note. quizType은 1이 객관식, 2가 서답형, 3이 서술형. 객관식이 아니면 quizchoices는 null

### 2.7. 퀴즈 제출하기
```
POST /api/subjects/quiz/submit
Request:
{
    "token": string,
    "subjectCode": string,
    "quizId": number,
    "answers" [
        "answer": string
    ]
}
Response:
{
    "success": boolean,
    "message": string
}
```

- note. ans는 백엔드에서 타입에 맞춰서 걍 파싱하면 될 듯

### 2.8. 과제 상세보기
```
POST /api/subjects/assignment/detailView
Request:
{
    "token": string,
    "subjectCode": string,
    "assignmentId": number
}
Response:
{
    "assignmentTitle": string,
    "assignmentContent": string,
    "totalAssignmentScore": number,
    "userAssignmentScore": number,
}
```

### 2.9. 과제 제출하기
```
POST /api/subjects/assignment/submitAssignment
Request:
{
    "token": string,
    "subjectCode": string,
    "assignmentId": number,
    "submittedAssignment": file
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 2.10. 성적 상세보기
```
POST /api/subjects/score/detailView
Request:
{
    "token": string,
    "subjectCode": string,
}
Response:
{
    "mean": double,
    "median": double,
    "scoreWight": double
}
```

## 3. 교사용 API

### 3.1. 수업 만들기
```
POST /api/teacher/makeClass
Request:
{
    "token": string,
    "subjectName": string,
    "subjectType": string
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 3.2. 학습자료 생성하기 (by 녹음파일)
```
POST /api/teacher/makeDocument
Request:
{
    "token": string,
    "subjectId": number
    "recordedClass": file
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 3.3. 학습자료 생성하기 (by 파일 업로드)
```
POST /api/teacher/makeDocument
Request:
{
    "token": string,
    "subjectId": number
    "uploadedFile": file
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 3.4. 학습자료 수정하기
```
POST /api/teacher/modifyDocument
Request:
{
    "token": string,
    "subjectId": number,
    "deletedFileNumber": number,
    "uploadedFile": file
}
Response:
{
    "success": boolean,
    "message": string
}
```

- note. 기존에 있던 document 지우고 modified file로 갈아끼우는 방식으로 하면 어떨까


### 3.5. 퀴즈 생성하기
```
POST /api/teacher/makeDocument
Request:
{
    "token": string,
    "subjectId": number,
    "selectedDocumentFlieId": [
        "DocumentFlieId": number
    ],
    "scorePercentage": double
}
Response:
{
    "success": boolean,
    "message": string
}
```

### 3.6. 퀴즈 수정하기 
```
POST /api/teacher/modifyDocument
Request:
{
    "token": string,
    "subjectId": number,
    "newQuiz": [
        {
            "totalQuizNumber": number,
            "quiz": [
                {
                    "quizType": number,
                    "quizNumber: number,
                    "quizContent": string,
                    "quizChoices": [
                        "first": string,
                        "second": string,
                        "third": string,
                        "fourth": string,
                        "fifth": string
                    ]
                }
            ]
        }
    ]
}
Response:
{
    "success": boolean,
    "message": string
}
```

## 인증 헤더

Protected API 호출 시 필요한 인증 헤더

```
Authorization: Bearer {token}
```
