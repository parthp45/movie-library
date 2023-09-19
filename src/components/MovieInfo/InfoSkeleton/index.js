import SkeletonImage from "antd/lib/skeleton/Image";
import SkeletonInput from "antd/lib/skeleton/Input";
import React from "react";
import styles from "./styles.module.css";
import SkeletonButton from "antd/lib/skeleton/Button";

const InfoSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <SkeletonImage
        active={true}
        style={{ width: "100vw", height: "633px", background: "#212121" }}
      />
      <div className={styles.contentWrapper}>
        <SkeletonImage
          active={true}
          style={{
            width: "300px",
            height: "408px",
            background: "#212121",
            borderRadius: "4px",
          }}
        />
        <div className={`${styles.content}`}>
          <SkeletonInput
            active={true}
            style={{
              width: "250px",
              height: "50px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "650px",
              height: "150px",
              borderRadius: "4px",
            }}
          />
          <div className="flex gap-3">
            <SkeletonButton active={true} size={"large"} shape={"round"} />
            <SkeletonButton active={true} size={"large"} shape={"round"} />
            <SkeletonButton active={true} size={"large"} shape={"round"} />
          </div>
          <SkeletonInput
            active={true}
            style={{
              width: "250px",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "250px",
              height: "20px",
              borderRadius: "4px",
            }}
          />
        </div>
        <SkeletonButton
          active={true}
          size={"large"}
          shape={"circle"}
          style={{
            width: "250px",
            height: "250px",
          }}
        />
      </div>
    </div>
  );
};

export default InfoSkeleton;
