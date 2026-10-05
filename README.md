# Align

뽀모도로 타이머, 할 일, 10분 단위 타임테이블, 통계, 캘린더, 일기를 한곳에서 쓰는 앱이에요.
아이폰에서는 **홈 화면에 추가**해서 앱처럼 쓸 수 있어요(오프라인에서도 열려요).

## 아이폰에 설치하기

1. 아이폰 **Safari**에서 `https://ekaldks0721-cpu.github.io/align/` 을 여세요.
2. 아래쪽 **공유 버튼(□↑)** → **홈 화면에 추가** → **추가**.
3. 홈 화면의 Align 아이콘으로 열면 주소창 없이 전체 화면으로 열려요.

## 배포 (처음 한 번)

GitHub 저장소 **Settings → Pages**에서 **Source**를 **Deploy from a branch**로, **Branch**를 **main** / **(root)**로 두고 **Save**를 누르세요.
그 뒤로는 `main`에 올릴 때마다 자동으로 반영되고, 앱은 다음에 열 때 새 버전을 받아요.

## 기기 간 동기화 (아이폰 ↔ 컴퓨터)

`firebase-config.js`에 Firebase 웹 앱 설정을 넣으면 **설정 → 저장 → 기기 간 동기화**에 로그인 칸이 생겨요.
아이폰 앱과 컴퓨터 브라우저(`https://ekaldks0721-cpu.github.io/align/`)에서 같은 이메일 계정으로 로그인하면 기록이 자동으로 맞춰져요.
일기 사진과 진행 중인 타이머는 기기마다 따로예요.

Firebase 쪽 준비: Authentication에서 **이메일/비밀번호** 로그인 사용, Firestore Database 만들기, 그리고 아래 보안 규칙 게시.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## 기록 옮기기와 백업

- 홈 화면 앱은 Safari나 다른 기기와 저장 공간이 따로예요. 예전 기록이 있으면 원래 쓰던 곳에서 **설정 → JSON 백업**으로 파일을 만든 다음, 아이폰 앱의 **설정 → JSON 백업 가져오기**로 불러오세요.
- 아이폰에서 **JSON 백업**·**CSV로 내보내기**를 누르면 공유 시트가 열려요. **파일에 저장**을 고르면 iCloud Drive 등에 저장돼요. 가끔 백업해 두세요.

## 아이폰에서 알아 둘 점

- 다른 앱으로 넘어가거나 화면이 꺼져 있는 동안에는 iOS가 웹앱을 멈춰서 **뽀모도로 종료음이 울리지 않아요.** 시간 계산은 그대로 맞고, 앱으로 돌아오면 바로 반영돼요.
- 무음 모드에서는 종료음이 나지 않아요.
- PC의 "데이터 폴더 연결" 기능은 아이폰 Safari가 지원하지 않아서 보이지 않아요.

## 파일

| 파일 | 역할 |
| --- | --- |
| `index.html` | 앱 전체 (화면·스타일·코드) |
| `manifest.webmanifest` | 홈 화면 앱 이름·아이콘·표시 방식 |
| `sw.js` | 오프라인 지원 (서비스 워커) |
| `firebase-config.js` | 기기 간 동기화용 Firebase 설정 |
| `icons/` | 앱 아이콘 |
