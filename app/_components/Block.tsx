import React from "react";
import styles from "./Block.module.css";

export default function Block({ children, border }: { children: React.ReactNode, border?: boolean }) {
	if (border === true) {
		return <div className={`${styles.block} ${styles.blockBorder}`}>{children}</div>;
	} else {
		return <div className={styles.block}>{children}</div>;
	}
}
