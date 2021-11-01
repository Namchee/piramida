import * as React from 'react';

export type BadgeProps = {
  className?: string;
  label?: string;
};

/**
 * Badge component. Used in the API documentation page.
 *
 * @return {JSX.Element} badge component
 */
function Badge({
  className,
  label,
  children,
}: React.PropsWithChildren<BadgeProps>): JSX.Element {
  const style = () => {
    const baseClass = ['px-2', 'py-1', 'block', 'inline-flex', 'rounded-full'];

    return `${baseClass.join(' ')} ${className}`;
  };

  return (
    <span role="status" aria-label={label} className={style()}>
      {children}
    </span>
  );
}

/**
 * Badge with green theme.
 *
 * @param {BadgeProps} props badge props
 * @return {JSX.Element} green badge
 */
function GreenBadge({
  className,
  label,
  children,
}: React.PropsWithChildren<BadgeProps>): JSX.Element {
  const style = () => {
    const baseClass = ['text-green-700', 'bg-green-100'];

    return `${baseClass.join(' ')} ${className}`;
  };

  return (
    <Badge className={style()} label={label}>
      {children}
    </Badge>
  );
}

/**
 * Badge with blue theme.
 *
 * @param {BadgeProps} props badge props
 * @return {JSX.Element} blue badge
 */
function BlueBadge({
  className,
  label,
  children,
}: React.PropsWithChildren<BadgeProps>): JSX.Element {
  const style = () => {
    const baseClass = ['text-light-blue-700', 'bg-light-blue-100'];

    return `${baseClass.join(' ')} ${className}`;
  };

  return (
    <Badge className={style()} label={label}>
      {children}
    </Badge>
  );
}

/**
 * Badge with yellow theme.
 *
 * @param {BadgeProps} props badge props
 * @return {JSX.Element} yellow badge
 */
function YellowBadge({
  className,
  label,
  children,
}: React.PropsWithChildren<BadgeProps>): JSX.Element {
  const style = () => {
    const baseClass = ['text-yellow-700', 'bg-yellow-100'];

    return `${baseClass.join(' ')} ${className}`;
  };

  return (
    <Badge className={style()} label={label}>
      {children}
    </Badge>
  );
}

/**
 * Badge with red theme.
 *
 * @param {BadgeProps} props badge props
 * @return {JSX.Element} purple badge
 */
function RedBadge({
  className,
  label,
  children,
}: React.PropsWithChildren<BadgeProps>): JSX.Element {
  const style = () => {
    const baseClass = ['text-red-700', 'bg-red-100'];

    return `${baseClass.join(' ')} ${className}`;
  };

  return (
    <Badge className={style()} label={label}>
      {children}
    </Badge>
  );
}

Badge.Green = GreenBadge;
Badge.Blue = BlueBadge;
Badge.Yellow = YellowBadge;
Badge.Red = RedBadge;

export default Badge;
