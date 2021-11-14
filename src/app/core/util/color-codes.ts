export type StyleCode = 'base' | 'primary' | 'secondary' | 'subsidiary' | 'success' | 'warn' | 'danger';

export function styleClassFromCode(code: StyleCode): string {
  switch (code) {
    case 'base':
      return 'style-base';
    case 'primary':
      return 'style-primary';
    case 'secondary':
      return 'style-secondary';
    case 'subsidiary':
      return 'style-subsidiary';
    case 'success':
      return 'style-success';
    case 'warn':
      return 'style-warn';
    case 'danger':
      return 'style-danger';
  }
}
