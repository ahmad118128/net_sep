import { BaseSwitch } from "@ui/atoms/Inputs/BaseSwitch";
import { IDaAs } from "@src/services/users/types";
import { BaseInput, Typography } from "@ui/atoms";
import { Control } from "react-hook-form";
import { IDaasConfig } from "@src/services/config/types";

type PropsType = {
  control: Control<IDaAs> | Control<IDaasConfig>;
};

export function DaasConfigForm({ control }: PropsType) {
  return (
    <>
      <div className="flex justify-between items-center px-2 col-span-3">
        <BaseSwitch control={control} name="can_download_file" />
        <Typography className="mb-1">:Download</Typography>
      </div>

      <div className="flex justify-between items-center px-2 col-span-3">
        <BaseSwitch control={control} name="can_upload_file" />
        <Typography className="mb-1">:Upload</Typography>
      </div>

      <div className="flex justify-between items-center px-2 col-span-3">
        <BaseSwitch control={control} name="clipboard_down" />
        <Typography className="mb-1">:Clipboard from Server</Typography>
      </div>

      <div className="flex justify-between items-center px-2 col-span-3">
        <BaseSwitch control={control} name="clipboard_up" />
        <Typography className="mb-1">:Clipboard from Client</Typography>
      </div>

      <div className="flex justify-between items-center px-2 col-span-3">
        <BaseSwitch control={control} name="webcam_privilege" />
        <Typography className="mb-1">:Webcam Privilege</Typography>
      </div>

      <div className="flex justify-between items-center px-2 col-span-3">
        <BaseSwitch control={control} name="microphone_privilege" />
        <Typography className="mb-1">:Microphone Privilege</Typography>
      </div>
      <div className="px-2 col-span-3 text-left">
        <Typography className="mb-1">:Max Download Size (MB)</Typography>
        <BaseInput
          control={control}
          name="max_transmission_download_size"
          id="max_transmission_download_size"
          type="number"
          hiddenError
          fullWidth
        />
      </div>
      <div className="px-2 col-span-3 text-left">
        <Typography className="mb-1">:Max Upload Size (MB)</Typography>
        <BaseInput
          control={control}
          name="max_transmission_upload_size"
          id="max_transmission_upload_size"
          type="number"
          hiddenError
          fullWidth
        />
      </div>
    </>
  );
}
