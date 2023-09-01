# mcp_ui

# 시작

1. pnpm 패키지 매니저로 작업시 .npmrc 추가 후 아래코드 작성

```
shamefully-hoist=true
node-linker=hoisted
```

2. pnpm install
3. pnpm storybook
4. 모바일에서 expo 다운로드 후 qr 코드로 접속 확인

# Storybook 작성

ComponentStory 방식과 ComponentStoryObj 방식이 있다.
ComponentStoryObj으로 Story를 export할 때, 쉽게 진행되므로 이를 채택한다.

- ADDONS Controls는 [링크](https://storybook.js.org/docs/react/essentials/controls)를 참고한다.

# Ref

https://github.com/storybookjs/react-native
