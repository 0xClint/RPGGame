import Sprite from "./Sprite";
import styles from "./ElevatedSprite.module.css";
import { TILES } from "@/helpers/tiles";
import { CELL_SIZE } from "@/helpers/consts";

export default function ElevatedSprite({
  frameCoord,
  size = CELL_SIZE,
  pxAboveGround = 3,
}) {
  return (
    <div className={styles.elevatedSprite}>
      <Sprite frameCoord={TILES.SHADOW} />
      <div
        className={styles.bodyContainer}
        style={{
          transform: `translateY(${-pxAboveGround}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={size} />
      </div>
    </div>
  );
}
