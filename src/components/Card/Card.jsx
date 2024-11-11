import React from "react";
import "./Card.css";
import { FaRegCircle } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BiAdjust, BiLoader } from "react-icons/bi";
import { BsCheckCircleFill, BsFillExclamationSquareFill } from "react-icons/bs";

const Card = ({ id, title, tag, status, priority, userName }) => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const isUserGroup = localStorage.getItem("group") === "user";
  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done'];

  const getStatusIndex = (status) => {
    return statusOrder.indexOf(status);
  };

  // Function to get initials
  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map(word => word[0].toUpperCase())
      .join("");
    return initials.slice(0, 2); // Limit to 2 initials
  };

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        {!isUserGroup && ( // Conditionally render the image container
          <div
            className="imageContainer relative"
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
              fontWeight: "bold",
              fontSize: "14px",
              color: "#555",
            }}
          >
            {userName ? (
              getInitials(userName)
            ) : (
              <img
                style={{ width: "95%", height: "95%", borderRadius: "50%" }}
                src="https://avatars.githubusercontent.com/u/113183730?v=4"
                alt="UserImage"
              />
            )}
            <div className="showStatus"></div>
          </div>
        )}
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
      {!isStatus && (
  <>
    {status === "Backlog" ? (
      <BiLoader style={{ fontSize: "14px", color: "#000", verticalAlign: "middle" }} />
    ) : status === "Todo" ? (
      <FaRegCircle style={{ fontSize: "14px", color: "#ddeded", verticalAlign: "middle" }} />
    ) : status === "In progress" ? (
      <BiAdjust style={{ fontSize: "14px", color: "#f2d750", verticalAlign: "middle" }} />
    ) : status === "Done" ? (
      <BsCheckCircleFill style={{ fontSize: "14px", color: "#28a745", verticalAlign: "middle" }} />
    ) : (
      <IoMdCloseCircleOutline style={{ fontSize: "14px", color: "#ff0000", verticalAlign: "middle" }} />
    )}
    
  </>
)}<span style={{ marginLeft: "5px", verticalAlign: "middle" }}>{title}</span>
</div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <BsFillExclamationSquareFill />
            ) : (
              <p>...</p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
