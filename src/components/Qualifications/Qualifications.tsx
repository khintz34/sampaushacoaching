import Image from "next/image";
import styles from "./Qualifications.module.scss";

type Props = {
  Qualification: string;
  imageSrc: string;
  imageAlt: string;
};

export function Qualifications({ Qualification, imageSrc, imageAlt }: Props) {
  const imageStyle = {
    borderRadius: "50%",
  };

  return (
    <div className={styles.QualificationsMain}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          style={imageStyle}
          height={20}
          width={20}
          alt={imageAlt}
        />
      </div>
      {Qualification}
    </div>
  );
}
