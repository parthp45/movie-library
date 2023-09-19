import SkeletonImage from "antd/lib/skeleton/Image";
import SkeletonInput from "antd/lib/skeleton/Input";
import React from "react";
import styles from "./styles.module.css";

const Skeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <SkeletonImage
          active={true}
          style={{ width: "100vw", height: "633px", background: "#212121" }}
        />
      </div>
      <div className={`flex gap-4 flex-wrap ${styles.cardWrapper}`}>
        <div className={`${styles.cardSkeleton}`}>
          <SkeletonImage
            active={true}
            className={styles.skeletonCard}
            style={{
              width: "250px",
              height: "351px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            className={styles.skeletonBtn}
            style={{
              width: "250px",
            }}
          />
        </div>
        <div className={`${styles.cardSkeleton}`}>
          <SkeletonImage
            active={true}
            className={styles.skeletonCard}
            style={{
              width: "250px",
              height: "351px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            className={styles.skeletonBtn}
            style={{
              width: "250px",
            }}
          />
        </div>
        <div className={`${styles.cardSkeleton}`}>
          <SkeletonImage
            active={true}
            className={styles.skeletonCard}
            style={{
              width: "250px",
              height: "351px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            className={styles.skeletonBtn}
            style={{
              width: "250px",
            }}
          />
        </div>
        <div className={`${styles.cardSkeleton}`}>
          <SkeletonImage
            active={true}
            className={styles.skeletonCard}
            style={{
              width: "250px",
              height: "351px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            className={styles.skeletonBtn}
            style={{
              width: "250px",
            }}
          />
        </div>
        <div className={`${styles.cardSkeleton}`}>
          <SkeletonImage
            active={true}
            className={styles.skeletonCard}
            style={{
              width: "250px",
              height: "351px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            style={{
              width: "150px",
              background: "#212121",
              height: "20px",
              borderRadius: "4px",
            }}
          />
          <SkeletonInput
            active={true}
            className={styles.skeletonBtn}
            style={{
              width: "250px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
