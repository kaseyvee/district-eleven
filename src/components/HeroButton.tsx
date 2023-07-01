"use client";

import React, { ReactNode } from "react";
import classNames from "classnames";
import Link from "next/link";

// need to add here from colors.module
export type Color = "yellow" | "white" | "black";

interface IProps {
  children?: any;
  color: Color;
  className?: string;
  style?: React.CSSProperties;

  to?: string; // When present, this component renders a <Link/> tag from react-router-dom and acts like a link. Otherwise, behaves like a regular button.
  href?: string; // When present, this component renders a <a/> tag. Otherwise, behaves like a regular button.
  onClick?: () => void;
  // forwardProps?: T; // props forwarded to Link / <a> / <button> (see react-router-dom)
}

function HeroButton(props: IProps): JSX.Element {
  // if we want our HeroButton to have an onClick effect, we use it from the props
  function onClickHelper(): void {
    if (props.onClick) {
      props.onClick();
    }
  }

  // add our classnames to our component through classNames library
  const fullClassNames: string = classNames(
    "button",
    `button_color_${props.color}`,
    props.className
  );

  // Generate the content here so we can selectively use it in the return logic below
  const content: ReactNode = (
    <React.Fragment>
      {/* we can use span here to add font-styles to our buttons */}
      {/* <span className={props.className}>{props.children}</span> */}
      <span>{props.children}</span>
    </React.Fragment>
  );

  if (props.to) {
    return (
      <Link
        // {...(props.forwardProps)}
        href={props.to}
        onClick={onClickHelper}
        className={fullClassNames}
        style={props.style}
      >
        {content}
      </Link>
    );
  } else if (props.href) {
    return (
      <a
        // {...(props.forwardProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={props.href}
        onClick={onClickHelper}
        className={fullClassNames}
        style={props.style}
      >
        {content}
      </a>
    );
  } else {
    return (
      <button
        // {...(props.forwardProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        onClick={onClickHelper}
        className={fullClassNames}
        style={props.style}
      >
        {content}
      </button>
    );
  }
}

export default HeroButton;
