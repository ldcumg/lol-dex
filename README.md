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

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/><img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge"/><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/><br/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

# 🗓️ 프로젝트 기간

2024.9.30 ~ 2024.10.7

# 🎨 주요 기능

## 1️⃣ 모든 챔피언 목록

- 리그 오브 레전드의 모든 챔피언들을 보여주는 페이지입니다.
- 86400초 마다 정보를 업데이트하는 ISR 렌더링 패턴을 이용하여 구현하였습니다.

## 2️⃣ 로테이션 챔피언 목록

- 주간 무료 챔피언들을 보여주는 페이지입니다.
- SRC 렌더링 패턴을 이용하여 구현하였습니다.

## 3️⃣ 챔피언 상세 정보

- 챔피언의 상세 정보를 보여주는 페이지입니다.
- SSR 렌더링 패턴을 이용하여 구현하였습니다.
- SEO에 유리한 동적 메타데이터를 사용하였습니다.

## 4️⃣ 아이템 목록

- 리그오브 레전드의 아이템들을 보여주는 목록입니다.
- SSR 렌더링 패턴을 이용하여 구현하였습니다.

## 5️⃣ 로딩창

- `Suspense`를 이용하여 로딩창을 구현하였습니다.

## 6️⃣ 오류 핸들링

- 오류 발생 시 `useRouter`의 `refresh`와 `startTransition`를 이용하여 요청을 다시할 수 있게 만들었습니다.

## 6️⃣ 다크 모드

- `next-themes` 라이브러리를 이용하여 다크모드를 구현했습니다.

# 💥 트러블 슈팅

### 기존

- 데이터를 요청할 때마다 필요한 버전 정보를 가져오기 위해서 서버 액션에서 선언한 `fetchVersions()`를 매번 실행하지 않기 위해 `RootLayout`에서 실행 후 결과값을 `export`하고 필요한 곳에서 `import`하여 사용

### 문제

- `RootLayout`을 클라이언트 사이드로 만들어 `metadata`를 사용 시 오류 발생
- 프레임워크인 next.js의 특별한 예약 파일에서 정해지지 않은 데이터를 `export`하여 오류 발생

### 해결

- 같은 함수를 여러번 실행해도 결과 값이 `request memoization`에 캐싱 되므로 데이터를 요청할 때마다 `fetchVersions()`를 실행하는 방식으로 변경
