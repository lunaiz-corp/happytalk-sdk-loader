<h1 align="center">Welcome to happytalk-sdk-loader 👋</h1>
<p>
  <img alt="NPM Version" src="https://img.shields.io/npm/v/happytalk-sdk-loader" />
  <a href="https://lunaiz-corp.github.io/happytalk-sdk-loader/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/lunaiz-corp/happytalk-sdk-loader/blob/master/LICENSE" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/github/license/lunaiz-corp/happytalk-sdk-loader" />
  </a>
</p>

> 모던 웹 프레임워크를 위한 비공식 (Unofficial) 해피톡 채팅 SDK 로더

## 설치

```sh
# npm이나 yarn도 사용 가능
pnpm add happytalk-sdk-loader
```

## 사용 예시 (React)

```tsx
// components/Happytalk.tsx
'use client';

import {useEffect} from 'react';
import * as HappytalkService from 'happytalk-sdk-loader';

export default function Happytalk() {
  useEffect(() => {
    HappytalkService.boot({
      siteId: '',
      siteName: '',

      categoryId: '',
      divisionId: '',

      dynamicScript: true,
    });
  }, []);

  return null;
}

// Happytalk 컴포넌트를 layout.tsx (Next.js) / main.tsx (React) 에서 렌더
```

## 주의 사항

1. 이 라이브러리는 클라이언트 측에서만 이용할 수 있습니다. SSR 등에서는 이용이 불가능 합니다. ("use client" 등 이용 필요)

## 개발자

👤 **Minsu Kim** @ LUNAIZ

- Website: https://devayaan.me
- Github: [@kms0219kms](https://github.com/kms0219kms)
- Email: [minsu.kim@lunaiz.com](mailto:minsu.kim@lunaiz.com)

## API 문서

- 해피톡 공식 문서: https://design.happytalkio.com/docs/basic
- TypeDoc Reference: https://lunaiz-corp.github.io/happytalk-sdk-loader

## 라이센스

Copyright © 2025 [LUNAIZ Corp](https://lunaiz.com).<br />
This project is [Apache--2.0](https://github.com/lunaiz-corp/happytalk-sdk-loader/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
