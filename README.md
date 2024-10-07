# 🎮 롤 도감

### Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.

# 🔗 배포 링크

### [롤 도감](https://lol-7a6vfw6mk-wonbinlees-projects.vercel.app)

# 📚 프로젝트 구조

<details>
<summary>📦src</summary>

```
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜error.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📜BackButton.tsx
 ┃ ┃ ┗ 📜ChampCard.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜DarkModeBtn.tsx
 ┃ ┃ ┣ 📜DarkModeProvider.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📜Loading.tsx
 ┣ 📂constant
 ┃ ┗ 📜baseUrl.ts
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜fiora.webp
 ┃ ┃ ┣ 📜jinx.webp
 ┃ ┃ ┗ 📜teemo.webp
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📜hotsFont.ttf
 ┃ ┗ 📜.DS_Store
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┗ 📜Item.ts
 ┣ 📂utils
 ┃ ┗ 📜serverApi.ts
 ┗ 📜.DS_Store
```

</details>

# ⚒️ 개발 환경

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/>
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

# 🗓️ 프로젝트 기간

2024.9.30 ~ 2024.10.7

# 🎨 주요 기능

## 1️⃣ 홈

### 홈

## 2️⃣ 챔피언 목록

리그 오브 레전드의 챔피언들을 보여주는 목록입니다.

## 3️⃣ 로테이션 챔피언 목록

리그 오브 레전드의 주간 무료 챔피언들을 보여주는 목록입니다.

## 4️⃣ 챔피언 상세 정보

챔피언의 상세 정보를 보여주는 페이지입니다.

## 5️⃣ 아이템 목록

아이템들을 보여주는 목록입니다.

# 💥 트러블 슈팅

|                                  기존                                  |                                        문제                                        |                                                                                                      해결                                                                                                      |
| :--------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| input값을 url의 query로 추가 후 해당 위치에 대해 음식점을 검색 후 나열 |             특정 단어가 아니면 검색이 되지 않거나 정확한 위치가 안나옴             |                             훈련소 리스트를 생성하고 입력값과 비교하여 `includes()`함수를 통해 입력값이 포함된 훈련소 목록을 보여주고 리스트에 존재하지 않는다면 toast알림을 출력                              |
|  zustand를 사용하여 상태를 관리하는 도중 alert 메세지가 중복되어 표시  |                  지속 내용 전달이 되지 않는 예상치 못한 동작 발생                  | 상태 업데이트 로직을 점검하여, 알럿 추가 시 기존 타이머를 클리어하도록 수정. timeoutIds 맵을 사용하여 각 알럿에 대한 타이머 ID를 관리하고, 알럿이 추가될 때마다 이전 알럿의 타이머를 정리하여 중복 표시를 방지 |
|            CRUD시 서버로부터 즉시 데이터 받아와서 보여주기             | 추가, 수정, 삭제 시 데이터를 받아오는 응답이 느려서 흰 화면이 잠시 보였다가 사라짐 |                                             Optimistic Update를 사용하여 서버로부터 오는 응답을 기다리지 않고, UI를 즉시 업데이트하여 해결 (오류 발생 시 원상복구)                                             |

# 💭 자체 의견

- 이기성(팀장)
  - 주제 선정이나 컨셉이 마음에 들었지만 디자인이 조금 아쉽다고 생각합니다!
    같이 리팩토링하는 시간을 가져 코드를 돌아볼 수 있는 기회가 있어서 좋았습니다. :D
- 김도현(팀원)
  - 의견 소통 및 여러 면에서 너무 만족스럽게 작업한 팀 프로젝트였습니다.
    다만 반응형이나 여러 UI/UX 적이 면이 아쉽습니다...
- 신희범(팀원)
  - 팀원간 의견도 잘 맞고, 트러블 없이 정해진 기간 안에 마무리 할 수 있어서 좋았다!
    다만, 기능 방면에서 더 잘할 수 있었을텐데 하는 아쉬움?이 있는 것 같다.
- 이원빈(팀원)
  - 프로젝트를 시작할 때부터 체계를 잘 잡아서 순탄하게 진행했던 것 같다.
    팀원들과 소통이 잘 된 점과 배운 것들을 많이 활용할 수 있어서 좋았다.
    외부 api를 사용하는 것과는 상관 없는 역할을 맡아서 api를 만져보지 못한 점이 아쉽다.
