import { NavigationType, ROUTER } from '@/constants/enum';

export function jumpOrScrollToTop(path: ROUTER, callback?: () => void): void {
  window.scrollTo(0, 0);
  callback?.();
}

export function openWithBlank(url: string, target = '_blank'): void {
  const newWindow = window.open(url, target);
  if (newWindow) {
    newWindow.opener = null;
  }
}

export function openOriginWithBlank(pathname: string): void {
  openWithBlank(window.location.origin + pathname);
}

export function switchPage(type: NavigationType, path?: string | ROUTER, callback?: () => void): void {
  if (!type || !path) return;
  switch (type) {
    case NavigationType.ROUTE:
      jumpOrScrollToTop(path as ROUTER, callback);
      break;
    case NavigationType.OPEN_NEW_TAB:
      openWithBlank(path);
      callback?.();
      break;
    default:
      break;
  }
}
