import ElevatedSprite from "@/components/object-graphics/ElevatedSprite";
import { Placement } from "./Placement";
import { TILES } from "@/helpers/tiles";
import { PLACEMENT_TYPE_FLOUR } from "@/helpers/consts";

export class FlourPlacement extends Placement {
  addsItemToInventoryOnColide() {
    return PLACEMENT_TYPE_FLOUR;
  }
  renderComponent() {
    return <ElevatedSprite frameCoord={TILES.FLOUR} />;
  }
}
