import React from 'react';
import { Typography } from '@ui/atoms';
import { CircleBg } from '@ui/atoms/CircleBg';

function CircleBGBorder({ icon, title }) {
	return (
		<Typography size="body3" type="div" className="px-3 w-2/12 text-center break-words uppercase">
			<span className="flex justify-around items-center border rounded-md">
				<CircleBg bgColor={icon} />
				{title}
			</span>
		</Typography>
	);
}

export default CircleBGBorder;
