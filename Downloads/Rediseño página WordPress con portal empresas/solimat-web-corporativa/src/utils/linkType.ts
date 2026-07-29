export function isInternalRoute(href: string): boolean {
  return href.startsWith('/');
}

export function isExternalHttpLink(href: string): boolean {
  return /^https?:\/\//.test(href);
}
