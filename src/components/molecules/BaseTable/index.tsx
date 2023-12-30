import React from 'react';
import { Card, Typography } from '@ui/atoms';
import { LoadingSpinner } from '../Loading';
import { NoResult } from '../NoResult';
import { CircleBg } from '@ui/atoms/CircleBg';
import { IconButton } from '@ui/atoms/BaseButton';
import { useTranslation } from 'react-i18next';

export function BaseTable(props) {
	const { headers, data, loading, onClick } = props;
	const { t } = useTranslation();

	const typeCondition = (key: string, data: any) => {
		if (key === 'usage_in_minute') {
			return typeof data[key] === 'string' ? data[key] : `${Math.floor(data[key])} دقیقه`;
		}

		return data[key];
	};

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : data.length > 0 ? (
				<>
					<Card
						color="neutral"
						className="flex items-center px-2 my-2 w-full bg-teal-500 text-white h-10">
						{headers.map((header, i) => (
							<div
								key={i}
								className={`${header.style} flex justify-center items-center `}
								dir={!header.dir ? 'ltr' : header.dir}>
								<Typography size="body3" type="div" className="uppercase ellipsis">
									{t(header.label)}
								</Typography>
							</div>
						))}
					</Card>

					{data.map((item, index) => (
						<Card
							key={index}
							color="neutral"
							className="flex items-center px-2 my-2 w-full text-neutral-600 h-14">
							{headers.map((header, i) => (
								<div
									key={i}
									className={`${header.style} flex justify-center items-center  `}
									dir={!header.dir ? 'ltr' : header.dir}>
									{header.status && (
										<CircleBg bgColor={item[header.status] ? 'bg-green-600' : 'bg-red-600'} />
									)}
									<Typography
										size="body3"
										type="div"
										className="text-xl  whitespace-no-wrap break-all ">
										{Array.isArray(header.type)
											? header.type.map((i, index) => (
													<React.Fragment key={index}>
														{index > 0 && ' '}
														<span className="">{item[i]}</span>
													</React.Fragment>
											  ))
											: header.function
											? header.function(item[header.type])
											: typeCondition(header.type, item)}
									</Typography>

									{header.type === 'component' && <header.component {...props} item={item} />}
									{header.type === 'action' &&
										header.actions.map((action, index) => (
											<IconButton
												key={index}
												{...action}
												onClick={() => onClick(action.action, item)}
											/>
										))}
								</div>
							))}
						</Card>
					))}
				</>
			) : (
				<NoResult />
			)}
		</>
	);
}
