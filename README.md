# 🎬 📒 영화 일기장

### 프로젝트 소개

- 영화 일기장은 감상한 영화를 정리하는 일기 서비스 입니다.

### 기술 스택

|            | 스택 명                       |
| ---------- | ----------------------------- |
| 프레임워크 | 리액트                        |
| 스타일     | styled-components             |
| 상태관리   | Redux toolkit / Redux Persist |
| 언어       | typeScript                    |
| 서버       | Firebase                      |

### 사용한 라이브러리

- react-router-dom
- axios
- Font Awesome

### 사용한 API

- #### [TMDB API](https://developer.themoviedb.org/docs/getting-started)
- 영화 관련 정보를 제공하는 API를 활용하여 영화에 대한 상세 정보도 일기에 함께 기록할 수 있도록 했습니다.

### 페이지별 기능

```
├── pages
│   ├── Diary - 기록한 일기를 조회하는 페이지입니다.
│   │   ├── index.tsx
│   │   └── style.tsx
│   ├── Edit - 기록한 일기를 수정하는 페이지 입니다.
│   │   ├── index.tsx
│   │   └── style.tsx
│   ├── Home - 메인페이지로, 기록한 일기를 리스트 형태로 보여줍니다.
│   │   ├── index.tsx
│   │   └── style.tsx
│   ├── Login - 로그인 페이지입니다.
│   │   ├── index.tsx
│   │   └── style.tsx
│   ├── Record - 일기를 작성하는 페이지입니다.
│   │   ├── index.tsx
│   │   └── style.tsx
│   └── SignUp - 회원가입 페이지입니다.
│       ├── index.tsx
│       └── style.tsx

```
