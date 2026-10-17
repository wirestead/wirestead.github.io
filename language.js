// All translations are trusted, repository-owned copy, never user input.
(() => {
  "use strict";
  const messages = {
  "en": {
    "description": "A unified C++20 interface for asynchronous Serial, TCP, UDP and UDS communication, with Python bindings.",
    "t1": "Skip to content",
    "t2": "Features",
    "t3": "Python",
    "t4": "Docs ↗",
    "t5": "Different transports.<br>One familiar API.",
    "t6": "Connect devices and services with a consistent C++20 interface for Serial, TCP, UDP and UDS.",
    "t7": "Get started <span>↗</span>",
    "t8": "View on GitHub ↗",
    "t9": "Your application",
    "t10": "Builders · Callbacks · Framing",
    "t11": "A common API shape across four transport families.",
    "t12": "Less transport glue.<br>More application logic.",
    "t13": "For applications that speak to serial sensors, TCP services and UDP telemetry feeds.",
    "t14": "A consistent starting point",
    "t15": "Configure each transport through builders and use a shared asynchronous model. Change the connection without rebuilding your application around a different API.",
    "t16": "Give bytes a message boundary",
    "t17": "Choose line-delimited, start/end pattern or length-prefixed framing. Add your own IFramer when your protocol needs it.",
    "t18": "Make runtime behavior visible",
    "t19": "Inspect runtime statistics and queue behavior. Callback-scoped data views make data ownership explicit; copy payloads when they need to outlive a callback.",
    "t20": "Build the connection.<br>Handle the data.",
    "t21": "Set connection limits, attach a callback and build your client. The quick start shows a complete program and its lifecycle.",
    "t22": "C++ quick start ↗",
    "t23": "Builder excerpt. Includes, startup and shutdown are shown in the quick start.",
    "t24": "C++ at the core.<br>Python in your workflow.",
    "t25": "Use Wirestead through its Python bindings. Install from PyPI and explore the package API.",
    "t26": "Explore Python bindings ↗",
    "t27": "Python bindings are experimental. Check the compatibility guide for supported wheels and matching core versions.",
    "t28": "Compatibility guide ↗",
    "t29": "Choose your next step.",
    "t30": "Install the library",
    "t31": "Start with vcpkg, or use CMake FetchContent and source builds.",
    "t32": "Installation guide ↗",
    "t33": "Understand the API",
    "t34": "Explore the API reference, callback lifetimes and error handling.",
    "t35": "Read the docs ↗",
    "t36": "See working examples",
    "t37": "Find examples to help connect the library to your application.",
    "t38": "Browse examples ↗",
    "t39": "Transports use plaintext by default. Optional TLS is available for TCP client/server builds with WIRESTEAD_ENABLE_TLS=ON; it does not apply to Serial, UDP or UDS.",
    "t40": "Security and threat model ↗",
    "t41": "GitHub ↗",
    "t42": "Benchmarks ↗",
    "t43": "Docs ↗"
  },
  "ko": {
    "description": "Serial, TCP, UDP, UDS를 위한 C++20 비동기 통신 라이브러리. 공통 인터페이스와 Python 바인딩을 만나보세요.",
    "t1": "본문으로 이동",
    "t2": "기능",
    "t3": "Python",
    "t4": "문서 ↗",
    "t5": "통신 방식은 달라도.<br>익숙한 하나의 API.",
    "t6": "Serial, TCP, UDP, UDS를 일관된 C++20 인터페이스로.<br>장치와 서비스를 연결하는 코드를 간결하게 만드세요.",
    "t7": "시작하기 <span>↗</span>",
    "t8": "GitHub에서 보기 ↗",
    "t9": "애플리케이션",
    "t10": "빌더 · 콜백 · 메시지 프레이밍",
    "t11": "네 가지 통신 방식에 공통으로 적용하는 API 구조.",
    "t12": "반복되는 통신 코드는 줄이고.<br>애플리케이션에 집중하세요.",
    "t13": "시리얼 센서, TCP 서비스, UDP 텔레메트리를 함께 다루는 애플리케이션을 위해.",
    "t14": "일관된 시작점",
    "t15": "빌더로 통신을 설정하고 공통 비동기 모델로 처리합니다. 다른 API에 맞춰 애플리케이션을 다시 구성하는 부담을 줄입니다.",
    "t16": "바이트에 메시지 경계를",
    "t17": "줄 구분, 시작·종료 패턴, 길이 접두어 방식으로 메시지를 구분합니다. 프로토콜에 맞는 IFramer를 직접 구현할 수도 있습니다.",
    "t18": "실행 상태를 확인 가능하게",
    "t19": "런타임 통계와 큐의 상태를 확인하세요. 콜백 범위의 데이터 뷰로 소유권을 명확히 하고, 콜백 이후에도 필요한 데이터는 복사해 보관합니다.",
    "t20": "연결을 구성하고.<br>데이터를 처리하세요.",
    "t21": "연결 제한과 콜백을 설정한 뒤 클라이언트를 생성합니다. 전체 실행 코드와 수명 주기는 시작 가이드에서 확인하세요.",
    "t22": "C++ 시작 가이드 ↗",
    "t23": "빌더 사용 예시입니다. 헤더, 시작과 종료 코드는 가이드에서 확인할 수 있습니다.",
    "t24": "코어는 C++로.<br>작업 흐름은 Python으로.",
    "t25": "Python 바인딩으로 Wirestead를 사용하세요. PyPI에서 설치하고 패키지 API로 연결을 구성할 수 있습니다.",
    "t26": "Python 바인딩 보기 ↗",
    "t27": "Python 바인딩은 실험 단계입니다. 지원 휠과 코어 버전 조합은 호환성 문서를 확인하세요.",
    "t28": "호환성 문서 ↗",
    "t29": "다음 연결을 시작하세요.",
    "t30": "라이브러리 설치",
    "t31": "vcpkg로 시작하거나 CMake FetchContent와 소스 빌드를 사용하세요.",
    "t32": "설치 가이드 ↗",
    "t33": "API 이해하기",
    "t34": "API 레퍼런스, 콜백 데이터 수명, 오류 처리 규칙을 확인하세요.",
    "t35": "문서 보기 ↗",
    "t36": "예제 살펴보기",
    "t37": "라이브러리를 애플리케이션에 연결하는 예제를 살펴보세요.",
    "t38": "예제 보기 ↗",
    "t39": "기본 통신은 평문입니다. WIRESTEAD_ENABLE_TLS=ON으로 빌드하면 TCP 클라이언트·서버에서 선택적으로 TLS를 사용할 수 있으며, Serial·UDP·UDS에는 적용되지 않습니다.",
    "t40": "보안 및 위협 모델 ↗",
    "t41": "GitHub ↗",
    "t42": "벤치마크 ↗",
    "t43": "문서 ↗"
  }
};
  const storageKey = "wirestead.language";
  const supported = (value) => value === "en" || value === "ko";
  function applyLanguage(language) {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = messages[language][element.dataset.i18n];
      if (element.dataset.i18nAttr) {
        element.setAttribute(element.dataset.i18nAttr, value);
      } else {
        element.innerHTML = value;
      }
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  }
  let saved;
  try { saved = localStorage.getItem(storageKey); } catch { /* Storage may be blocked. */ }
  const preferred = navigator.languages?.[0] || navigator.language || "en";
  const initial = supported(saved) ? saved : (/^ko(?:-|$)/i.test(preferred) ? "ko" : "en");
  applyLanguage(initial);
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (!supported(language)) return;
      applyLanguage(language);
      try { localStorage.setItem(storageKey, language); } catch { /* Switching still works. */ }
    });
  });
  document.querySelector(".language-switch").hidden = false;
})();
