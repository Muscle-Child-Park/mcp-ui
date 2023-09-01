# UI Components

### 로컬 환경에서 실행하기

0. git, nodejs, vscode를 먼저 설치해주세요

- git 설치방법: [Window](https://code-lab1.tistory.com/249) / [Mac](https://afsdzvcx123.tistory.com/entry/%EB%A7%A5%EB%B6%81%EB%A7%A5OS-M1-git-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)
- nodejs 설치방법: [Window](https://offbyone.tistory.com/441) / [Mac](https://seoneu.tistory.com/46)
- vscode 설치방법: [Window](https://coding-factory.tistory.com/939) / [Mac](https://extsdd.tistory.com/423)

```
git clone https://github.com/Muscle-Child-Park/mcp-ui.git
```

1. `pnpm install` 명령어를 사용하여 node_modules 설치하세요.
2. `pnpm storybook` 명령어를 사용하여 개발 서버를 실행하세요.
3. 모바일에서 테스트를 확인하기 위해 expo 앱이 필요합니다.

- 모바일에서 expo 앱을 다운로드 후 qr코드 접속
- 빌드시 약간의 시간이 소요됩니다.

#### 참고

1. pnpm 패키지 매니저로 작업시 .npmrc 추가 후 아래코드 작성

```
shamefully-hoist=true
node-linker=hoisted
```

2. Storybook 작성

ComponentStory 방식과 ComponentStoryObj 방식이 있다.
ComponentStoryObj으로 Story를 export할 때, 쉽게 진행되므로 이를 채택한다.

- ADDONS Controls는 [링크](https://storybook.js.org/docs/react/essentials/controls)를 참고한다.

## Ref

https://github.com/storybookjs/react-native

## web demo

https://64f1f182dd48b44d7d0577f7-sdbbxxtmzs.chromatic.com/?path=/story/components-system-bottomsheet--my-bottom-sheet

- 모바일에서 적용된 화면을 웹에서 보여주므로 몇몇 컴포넌트의 렌더링이 깨지는걸 볼 수 있다.
