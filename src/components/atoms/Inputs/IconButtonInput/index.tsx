import { BaseIcon } from "@ui/atoms/BaseIcon";
import { ColorIndent } from "../types";
import { iconBaseInputStyles } from "../styles";
import { IconType } from "@src/types/global";

type PropsType = {
  intent: ColorIndent;
  icon: IconType;
  onClick: () => void;
};

export function IconButtonInput({ icon, intent, onClick }: PropsType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={iconBaseInputStyles({
        intent,
      })}
    >
      <BaseIcon icon={icon} className="mx-1" size="xs" />
    </button>
  );
}
