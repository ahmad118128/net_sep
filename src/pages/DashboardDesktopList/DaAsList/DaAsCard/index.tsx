import { Card, Typography } from "@ui/atoms";
import { IDaAs } from "@src/services/users/types";
import { IconButton } from "@ui/atoms/BaseButton";
import { SetAccessTime } from "./SetAccessTime";

type ProductCardProps = {
  daas: IDaAs;
  isHeader?: boolean;
  onClickActions?: (
    action: "delete" | "edit" | "details",
    value?: number
  ) => void;
};

export function DaAsCard({ daas, isHeader, onClickActions }: ProductCardProps) {
  return (
    <>
      <Card
        color="neutral"
        className={`${isHeader && "bg-teal-500 text-white"} flex ${
          isHeader ? "h-10" : "h-14"
        } items-center px-2 my-2 w-full text-neutral-600`}
      >
        <div className="px-3 w-1/12 text-center break-words">
          {!isHeader && onClickActions && (
            <IconButton
              icon="ic:baseline-delete"
              color="redNoBg"
              onClick={() => onClickActions("delete", daas.id)}
            />
          )}
        </div>

        <div className="px-3 w-6/12 text-center break-words">
          {!isHeader ? (
            <SetAccessTime />
          ) : (
            <Typography size="body3">{daas.email}</Typography>
          )}
        </div>

        <Typography
          size="body3"
          type="div"
          className="px-3 w-3/12 text-center break-words"
        >
          {daas.email}
        </Typography>
        <Typography
          size="body3"
          type="div"
          className="px-3 w-2/12 text-center break-words uppercase"
        >
          {daas.http_port}
        </Typography>
        <Typography
          size="body3"
          type="div"
          className="px-3 w-2/12 text-center break-words uppercase"
        >
          {daas.https_port}
        </Typography>
      </Card>
    </>
  );
}
