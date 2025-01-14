declare global {
  interface Window {
    Happytalk: new (props: BootOptions) => IHappytalk;
    ht?: IHappytalk;
  }
}

interface IHappytalk {
  open(): void;
  close(): void;

  linkToKakao(): void;
  linkToNaver(): void;

  setParams(params: string): void;

  sendText(text: string): void;
  sendImage(file: File[] | FileList): void;

  endChat(): void;

  event: {
    on: (event: EventHandlers, callback: Function) => void;
  };
}

export interface BootOptions {
  /**
   * App ID
   * 설정 - 회사 정보 관리 - 시스템 정보에서 확인 가능
   */
  siteId: string;

  /**
   * App Name
   * 설정 - 회사 정보 관리 - 회사정보에서 확인 가능
   */
  siteName: string;

  /**
   * 대분류 ID
   * 설정 - 상담 분류 관리 - 대분류 앞에 적혀있는 숫자 코드
   */
  categoryId: string;

  /**
   * 중분류 ID
   * 설정 - 상담 분류 관리 - 중분류 앞에 적혀있는 숫자 코드
   */
  divisionId: string;

  /**
   * 파트너사 ID
   */
  partnerId?: string;

  /**
   * 쇼핑몰 ID
   */
  shopId?: string;

  /**
   * 고정 및 Custom 파라미터 추가영역
   * 파라미터가 여러 개인 경우 ,(콤마)로 구분
   * 예) 'parameter1=1,parameter2=2,site_uid=1'
   *
   * 사용 가능한 파라미터:
   * - site_uid : 고객 ID
   * - cus_extra_username : 고객 이름
   * - cus_extra_phone : 고객 휴대폰 번호
   * - cus_extra_tel_phone : 고객 전화번호
   * - cus_extra_email : 고객 이메일
   * - parameter1~parameter10 : 커스텀 파라미터
   *
   * params에 site_uid값을 넘길 경우 다른 브라우저를 사용하더라도 동일한 웹채팅창을 요청합니다.
   */
  params?: string;

  /**
   * 카카오톡 채널 ID
   * 설정 - 서비스 연동 관리에서 연동한 카카오톡 채널 ID
   * 에디터 창에서 설정한 채널 ID 값은 기본 default 값이며, kakaoId 값이 있으면 기본값을 override합니다.
   */
  kakaoId?: string;

  /**
   * 네이버톡톡 채널 ID
   * 설정 - 서비스 연동 관리에서 연동한 네이버톡톡 ID
   * 에디터 창에서 설정한 채널 ID 값은 기본 default 값이며, naverId 값이 있으면 기본값을 override합니다.
   */
  naverId?: string;

  /**
   * true이면 동적으로 iframe을 생성해서 해피톡 채팅을 호출할 수 있습니다.
   */
  dynamicScript?: boolean;

  /**
   * true이면 버튼이 숨겨진 상태로 렌더링됩니다. hover하면 버튼이 노출됩니다.
   */
  showOnHover?: boolean;

  /**
   * 채팅 부가 옵션
   * @see ChatOptions
   */
  options?: ChatOptions;

  /**
   * 채팅뷰 옵션
   * @see ChatViewOptions
   */
  chatview?: ChatViewOptions;
}

export interface ChatOptions {
  /**
   * 테마
   */
  theme?: 'default' | 'simple' | 'banner' | 'dark';

  /**
   * 제목
   */
  title?: string;

  /**
   * 부제
   */
  subTitle?: string;

  /**
   * 제목/부제목 정렬
   */
  titleAlign?: 'left' | 'center' | 'right';

  /**
   * 배경 색상 (채팅 버튼, 채팅창 색상, 메세지 버블 색상)
   * 예:
   * 1. '#cccccc'
   * 2. 'red'
   * 3. 'rgba(0, 0, 0, 0.05)'
   */
  backgroundColor?: string;

  /**
   * 글자 색상 (채팅 버튼 아이콘 및 메세지 버블 텍스트 색)
   * 예:
   * 1. '#cccccc'
   * 2. 'red'
   * 3. 'rgba(0, 0, 0, 0.05)'
   */
  textColor?: string;

  /**
   * 근무시간 on/off
   */
  isWorktime?: boolean;

  /**
   * 상담가능 상담원 on/off
   */
  isConsultant?: boolean;

  /**
   * 상담 응답 속도 설정
   */
  isResponseSpeed?: 'fast' | 'normal' | 'slow' | 'hide';

  /**
   * 공지사항 on/off
   */
  isNotice?: boolean;

  /**
   * 헬프데스크 on/off
   */
  isHelpdesk?: boolean;

  /**
   * 이전 대화 기록 on/off
   */
  isPreviousHistory?: boolean;

  /**
   * 채팅 버튼 호출 (모바일 디바이스에서만 사용 가능)
   */
  isChatButtonCall?: 'current' | 'new';

  /**
   * 해피톡 pc 버튼 모양 선택
   */
  pcHappytalkButtonChoice?: 1 | 2 | 3;

  /**
   * 카카오톡 pc 버튼 모양 선택
   */
  pcKakaotalkButtonChoice?: 1 | 2 | 3;

  /**
   * 네이버톡톡 pc 버튼 모양 선택
   */
  pcNavertalkButtonChoice?: 1 | 2 | 3;

  /**
   * pc 버튼 위치
   */
  pcButtonPosition?: 'left' | 'right';

  /**
   * pc 버튼 css right 값
   */
  pcButtonRight?: number;

  /**
   * pc 버튼 css left 값
   */
  pcButtonLeft?: number;

  /**
   * pc 버튼 css bottom 값
   */
  pcButtonBottom?: number;

  /**
   * pc 버튼 크기 (width, height 값 동일)
   */
  pcButtonSize?: number;

  /**
   * 해피톡 mobile 버튼 모양 선택
   */
  mobileHappytalkButtonChoice?: 1 | 2 | 3;

  /**
   * 카카오톡 mobile 버튼 모양 선택
   */
  mobileKakaotalkButtonChoice?: 1 | 2 | 3;

  /**
   * 네이버톡톡 mobile 버튼 모양 선택
   */
  mobileNavertalkButtonChoice?: 1 | 2 | 3;

  /**
   * mobile 버튼 위치
   */
  mobileButtonPosition?: 'left' | 'right';

  /**
   * mobile 버튼 css right 값
   */
  mobileButtonRight?: number;

  /**
   * mobile 버튼 css left 값
   */
  mobileButtonLeft?: number;

  /**
   * mobile 버튼 css bottom 값
   */
  mobileButtonBottom?: number;

  /**
   * mobile 버튼 크기 (width, height 값 동일)
   */
  mobileButtonSize?: number;

  /**
   * 채팅창 너비
   */
  chatWindowWidth?: number;

  /**
   * 채팅창 높이
   */
  chatWindowHeight?: number;

  /**
   * 채팅 입력창 상담원 연결 후 안내메시지
   */
  basicPlaceholder?: string;

  /**
   * 채팅 입력창 챗봇 상태일 경우 안내메시지
   */
  chatbotPlaceholder?: string;
}

export interface ChatViewOptions {
  /**
   * true를 설정할 경우 아래 옵션값들이 적용됩니다.
   * false를 설정할 경우 아래 옵션들은 적용되지 않습니다.
   */
  only?: boolean;

  /**
   * target element 안으로 iframe을 삽입하기 위한 id값
   * chatview only 옵션이 true 일 경우 container 너비, 높이에 맞게 렌더링됩니다.
   * containerId 옵션을 적지 않으면 디바이스 크기에 맞게 렌더링됩니다.
   */
  containerId?: string;
}

export enum EventHandlers {
  'happytalk:ready',
  'happytalk:open',
  'happytalk:close',
  'happytalk:createChatRoom',
  'happytalk:clickChannel',
  'kakaotalk:clickChannel',
  'navertalk:clickChannel',
  'webview:link',
}

const isSSR = () => {
  if (typeof window === 'undefined') {
    console.error('Happytalk SDK is only executable on browser.');
    return true;
  }
  return false;
};

const isSDKLoaded = () => {
  if (!window.Happytalk || !window.ht) {
    console.error(
      'Happytalk SDK is not loaded. Please call loadScript() before calling ChannelIO APIs.',
    );
  }

  return window.Happytalk && window.ht;
};

/**
 * 해피톡 SDK를 로드하고, 채팅 버튼을 렌더링합니다.
 *
 * @param {BootOptions} options
 *
 * @remarks
 * 이 함수는 SSR 환경에서는 실행되지 않으며, 2번 이상 호출하지 않도록 주의해주세요.
 */
export async function boot(options: BootOptions) {
  if (isSSR()) return;

  if (window.ht && 'open' in window.ht) {
    return console.error('Happytalk script included twice.');
  }

  const $script = document.createElement('script');
  const $element = document.getElementsByTagName('script')[0];

  $script.id = 'happytalkSDK';
  $script.async = true;
  $script.src =
    'https://chat-static.happytalkio.com/sdk/happytalk.chat.v2.min.js';

  if ($element && $element.parentNode) {
    $element.parentNode.insertBefore($script, $element);
  } else {
    document.body.appendChild($script);
  }

  $script.addEventListener('load', function (e) {
    console.log('Happytalk script loaded.');

    window.ht = new window.Happytalk(options);
    return window.ht;
  });
}

/**
 * 해피톡 웹채팅창이 열립니다.
 *
 * @remarks
 * 위 기능들은 iframe 로드가 다 완료된 이후 사용이 가능하므로 ht.event.on('happytalk:ready', function () {}) 이벤트 핸들러와 같이 사용해주시기를 권고합니다.
 *
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function open(): void {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.open();
}

/**
 * 해피톡 웹채팅창이 닫힙니다.
 *
 * @remarks
 * 위 기능들은 iframe 로드가 다 완료된 이후 사용이 가능하므로 ht.event.on('happytalk:ready', function () {}) 이벤트 핸들러와 같이 사용해주시기를 권고합니다.
 *
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function close() {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.close();
}

/**
 * 에디터에서 설정한 카카오톡 ID로 연결된 페이지로 이동합니다.
 *
 * @remarks
 * 위 기능들은 iframe 로드가 다 완료된 이후 사용이 가능하므로 ht.event.on('happytalk:ready', function () {}) 이벤트 핸들러와 같이 사용해주시기를 권고합니다.
 *
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function linkToKakao() {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.linkToKakao();
}

/**
 * 에디터에서 설정한 네이버톡톡 ID로 연결된 페이지로 이동합니다.
 *
 * @remarks
 * 위 기능들은 iframe 로드가 다 완료된 이후 사용이 가능하므로 ht.event.on('happytalk:ready', function () {}) 이벤트 핸들러와 같이 사용해주시기를 권고합니다.
 *
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function linkToNaver() {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.linkToNaver();
}

/**
 * 해피톡 방 생성시 params를 변경합니다.
 *
 * @remarks
 * ht.event.on('happytalk:createChatRoom', function () {}) 이벤트 핸들러와 같이 사용해주세요.
 * 통합 버튼을 사용 중인 경우 ht.event.on('happytalk:open', function () {}) 이벤트 핸들러와 같이 사용해주세요.
 *
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function setParams(params: string) {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.setParams(params);
}

/**
 * 채팅방 생성시 텍스트 메세지를 전송합니다.
 *
 * @param {String} text
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function sendText(text: string) {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.sendText(text);
}

/**
 * 채팅방 생성시 이미지 메세지를 전송합니다.
 *
 * @param {File[] | FileList} file
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function sendImage(file: File[] | FileList) {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.sendImage(file);
}

/**
 * 채팅방 종료를 위해 confirm 모달창이 노출됩니다.
 *
 * @see [Happytalk Docs: API functions](https://design.happytalkio.com/docs/function)
 */
export function endChat() {
  if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
  window.ht.endChat();
}

/**
 * 해피톡에서 제공되는 이벤트 핸들러입니다.
 *
 * @see [Happytalk Docs: Event handlers](https://design.happytalkio.com/docs/event)
 */
export const event = {
  on: (event: EventHandlers, callback: Function) => {
    if ((isSSR() && !isSDKLoaded()) || !window.ht) return;
    window.ht.event.on(event, callback);
  },
};
