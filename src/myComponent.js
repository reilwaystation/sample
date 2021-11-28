import React from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const myComponent = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          width: 100%;
          position: relative;
        `}
      >
        {/* GROUP 1 BUTTONS IN THE MIDDLE */}
        <div
          className={css`
            display: flex;
            justify-content: center;
            width: 100%;
            position: absolute;
          `}
        >
          <button
            className={css`
              margin: 0 0.5rem;
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
              background: blue;
              color: white;
            `}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button
            className={css`
              margin: 0 0.5rem;
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
              background: red;
              color: white;
            `}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </button>
        </div>

        {/* GROUP 1 BUTTONS IN THE MIDDLE */}
        <div
          className={css`
            margin: 0 0.5rem;
            display: flex;
            justify-content: flex-end;
            width: 100%;
            position: absolute;
          `}
        >
          <button
            className={css`
              margin: 0 0.5rem;
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
              background: blue;
              color: white;
            `}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button
            className={css`
              margin: 0 0.5rem;
              height: 2rem;
              width: 2rem;
              border-radius: 50%;
              background: blue;
              color: white;
            `}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default myComponent;
