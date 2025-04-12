// 예시 데이터 (학번 + 이름 → ID, PW)
const userData = [
  {
    studentId: "202401",
    studentName: "홍길동",
    googleId: "202401@school.edu",
    googlePw: "abcd1234"
  },
  {
    studentId: "202402",
    studentName: "김하늘",
    googleId: "202402@school.edu",
    googlePw: "sky5678"
  },
  {
    studentId: "202403",
    studentName: "박지민",
    googleId: "202403@school.edu",
    googlePw: "pjm9012"
  }
];

// 폼 제출 이벤트 설정
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 기본 제출 막기

  // 입력값 가져오기
  const inputId = document.getElementById("studentId").value.trim();
  const inputName = document.getElementById("studentName").value.trim();

  // 해당 학생 찾기
  const found = userData.find(
    (user) => user.studentId === inputId && user.studentName === inputName
  );

  // 결과 표시
  const resultBox = document.getElementById("result");
  const googleId = document.getElementById("googleId");
  const googlePw = document.getElementById("googlePw");

  if (found) {
    googleId.textContent = found.googleId;
    googlePw.textContent = found.googlePw;
    resultBox.style.display = "block";
  } else {
    googleId.textContent = "";
    googlePw.textContent = "";
    resultBox.style.display = "block";
    resultBox.innerHTML = `<h2>검색 결과</h2><p style="color: #ff8080;">일치하는 정보가 없습니다.</p>`;
  }
});
