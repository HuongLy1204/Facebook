import { useEffect, useState } from "react";
import AccountOnline from "../AccountOnline/AccountOnline";
import "./ListAccountOnline.css";

function ListAccountOnline(data) {
  
  function handleShowupAcc() {
    const result = data.dataOnline.map((item) => {
      return <AccountOnline listItem={item}></AccountOnline>;
    });
    return result;
  }

  return (
    <div className="list-acc-online-container">
      <div className="title-online">
        <div className="content-title">
          <span>NGƯỜI LIÊN HỆ</span>
        </div>
        <div>
          <button className="items-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              className="biii bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <button className="items-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              className="biii bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="acc-onl-container">{handleShowupAcc()}</div>
    </div>
  );
}
export default ListAccountOnline;
