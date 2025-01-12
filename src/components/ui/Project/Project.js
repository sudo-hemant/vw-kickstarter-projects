import React, { useCallback } from "react";

import { currencyMap } from "../common/constants/currency";
import { formatDate } from "../common/helpers/date.helpers";

import "./project.css";

const getProgressBarClass = (percentage) => {
  /**
   * @note
   * Red for < 30%
   * Orange for 30-50%
   * Light yellow
   * Green for 80-100%
   * dark Green for 80-100%
   */
  if (percentage < 30) return "progress-bar-fill-low";
  if (percentage < 50) return "progress-bar-fill-medium";
  if (percentage < 80) return "progress-bar-fill-high";
  if (percentage < 105) return "progress-bar-fill-full";
  return "progress-bar-fill-over";
};

const Project = ({ data }) => {
  const {
    "s.no": sNo,
    "amt.pledged": amtPledged,
    "percentage.funded": percentageFunded,
    "num.backers": numBackers,
    "end.time": endTime,
    title,
    blurb,
    by,
    currency,
    location,
    country,
    // state,
    // type,
    // url,
  } = data;

  const formattedDate = useCallback(() => {
    return formatDate(endTime);
  }, [endTime]);

  return (
    <div className="project-container">
      <div className="project-image">
        {/* <img src={dummyImage} alt={title} /> */}
      </div>

      <div className="project-content">
        <div className="project-location">
          <h2>{`#${sNo}`}</h2>
          <div>{`Location: ${location}, ${country}`}</div>
        </div>

        <h3 className="project-title">{title}</h3>

        <div className="project-details">
          <div className="project-details-item">
            <div>Amount Pledged</div>
            <h3 className="project-details-item-value-amount">
              {`${currencyMap[currency] || "$"}${amtPledged}`}
            </h3>
          </div>

          <div className="project-details-item">
            <div>Percentage Funded ({percentageFunded}%)</div>
            <div>
              <div className="progress-bar">
                <div
                  className={`progress-bar-fill ${getProgressBarClass(
                    percentageFunded
                  )}`}
                  style={{ width: `${percentageFunded}%` }}
                />
              </div>
            </div>
          </div>

          <div className="project-details-item">
            <div>Number of Backers</div>
            <div>{numBackers}</div>
          </div>

          <div className="project-details-item">
            <div>End Time</div>
            <div>{formattedDate()}</div>
          </div>
        </div>

        <p className="project-blurb">{blurb}</p>
        <p className="project-by">{`by: ${by}`}</p>

        {/* <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a> */}
      </div>
    </div>
  );
};

export default Project;
