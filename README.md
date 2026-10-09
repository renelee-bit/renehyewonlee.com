# renehyewonlee.com

Rene Hyewon Lee (이혜원) 개인 웹사이트.

- 이력 수정: `data.js`만 고치면 됩니다. 커밋하면 Cloudflare가 1분 안에 자동 배포합니다.
- `template.html`: 레이아웃·디자인·문구(UI). 디자인을 바꿀 때는 이 파일을 고칩니다.
- `index.html`: `template.html` + `data.js`로 만든 결과물(검색엔진용으로 내용이 미리 채워진 버전). 직접 고치지 않습니다.
- 다시 만들기: `npm i jsdom && node tools/prerender.cjs`
  (data.js만 고치고 이 단계를 건너뛰어도 방문자 화면은 최신으로 보입니다. 검색엔진용 사본만 다음 빌드 때 갱신됩니다.)
- `wrangler.jsonc`, `.assetsignore`: Cloudflare 배포 설정
