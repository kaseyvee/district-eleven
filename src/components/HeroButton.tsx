"use client";

import React, { ReactNode } from "react";
import classNames from "classnames";
import Link from "next/link";

export type Color = "yellow" | "white" | "black";

interface IProps {
  children?: any;
  color: Color;
  className?: string;
  style?: React.CSSProperties;

  to?: string; // When present, this component renders a <Link/> tag from react-router-dom and acts like a link. Otherwise, behaves like a regular button.
  href?: string; // When present, this component renders a <a/> tag. Otherwise, behaves like a regular button.
  onClick?: () => void;
}

function HeroButton(props: IProps): JSX.Element {
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
      <span>{props.children}</span>
    </React.Fragment>
  );

  if (props.to) {
    return (
      <Link
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
