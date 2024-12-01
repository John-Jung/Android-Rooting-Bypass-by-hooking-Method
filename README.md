#  함수 후킹을 통한 안드로이드 루팅 탐지 우회

## 사용도구

| 도구명 | 용도 |
|:--------:|:------:|
| JADX | 디컴파일 툴 |
| Frida | 안드로이드 메소드 변조 툴 |

## JADX 화면
### 루팅 탐지 함수 식별
![루팅 함수](https://github.com/user-attachments/assets/112c4087-6e0c-48d6-b8a0-c2d41f7d9ea1)

### 루팅 탐지 함수 snippet
![snippet](https://github.com/user-attachments/assets/f602c548-af78-4e26-89d7-406d0c893128)


### snippet 코드
```javascript
Java.perform(function () {

	let b = Java.use("ba.s$a$b");
	b["invoke"].overload().implementation = function () {
		console.log(`b.invoke is called`);
		let result = true // 이 부분을 false로 변환
		console.log(`b.invoke result=${result}`);
		return result;
	};
});
```

### Frida에서 현재 실행중인 앱(프로세스) 찾기

명령어: ```frida-ps -Ua```

![롯데마트 패키지 이름 마스킹](https://github.com/user-attachments/assets/e226d11d-a34b-458a-8661-2ae80cbbf083)

### Frida 실행

명령어: ```frida -Uf <Identifier> -l isrooted.js```

![프리다 화면 마스킹](https://github.com/user-attachments/assets/c99c5d65-d349-4aeb-8464-ee0ab73b72a7)

# 결과 루팅 우회 성공

실제 서비스 중인 앱을 대상으로 해서 캡쳐 화면 X
