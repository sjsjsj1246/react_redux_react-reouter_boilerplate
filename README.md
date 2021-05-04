# react_redux_react-reouter_boilerplate

## About

React 개발을 위한 boilerplate입니다.

## 적용 라이브러리

- redux
- redux -saga -logger
- axios
- react-router

## 프로젝트 구조

├─ src
│ ├─ api/ : API 통신 코드를 작성합니다.  
│ ├─ components/ : 실제 보여지는 컴포넌트를 작성합니다.  
│ ├─ container/ : redux 상태 조회와 handle 함수를 정의하여 컴포넌트에게 넘겨줍니다.  
│ ├─ modules : redux 모듈을 작성합니다.  
│ ├─ pages/ : router로 보여줄 페이지를 작성합니다. 각종 url, params를 처리하여 container에게 넘겨줍니다.  
│ ├─ App.js : 각 Route에 대한 페이지를 정의합니다.  
│ └─ index.js : 앱 진입점이며 redux와 saga를 적용합니다.

## 프로젝트 동작 로직

이 프로젝트는 MVC 패턴을 따르며 Components는 View, Container는 Controller, Redux는 Model역할을 합니다.

시스템 진입 -> index.js는 reducer를 app에게 제공 -> app은 url에 따라 page컴포넌트를 렌더링 -> page 컴포넌트는 url을 파싱하여 container에게 정보 제공 -> container 컴포넌트는 필요한 redux 상태를 조회하고 handle 함수를 정의하여 component에게 제공 component는 유저와 직접 상호작용함

유저의 상호작용 -> component는 유저와 상호작용 한 결과를 container에게 전달 -> container는 이를 바탕으로 redux 액션 함수 실행 후 결과를 container에게 전달 -> container는 component에게 변화한 값을 전달 또는 다른 페이지 이동 처리 -> component는 상태가 변화했으므로 리랜더링됨
