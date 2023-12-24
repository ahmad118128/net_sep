import React from 'react';
import { Card, Typography } from '@ui/atoms';
import { LoadingSpinner } from '../Loading';
import { NoResult } from '../NoResult';
import { CircleBg } from '@ui/atoms/CircleBg';
import { IconButton } from '@ui/atoms/BaseButton';

export function BaseTable({ headers, data, loading, onClickActions }) {
	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : data.length > 0 ? (
				<>
					<Card
						color="neutral"
						className="flex items-center px-2 my-2 w-full bg-teal-500 text-white h-10">
						{headers.map((header) => (
							<div
								key={header.type}
								className={`${header.style} flex justify-center items-center `}
								dir={!header.dir ? 'ltr' : header.dir}>
								<Typography size="body3" type="div" className="uppercase">
									{header.label}
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
									className={`${header.style} flex justify-center items-center uppercase `}
									dir={!header.dir ? 'ltr' : header.dir}>
									{!header.status ? (
										<Typography
											size="body3"
											type="div"
											className="text-xl uppercase whitespace-no-wrap break-all ">
											{Array.isArray(header.type)
												? header.type.map((i, index) => (
														<React.Fragment key={index}>
															{index > 0 && ' '}
															<span className="">{item[i]}</span>
														</React.Fragment>
												  ))
												: header.function
												? header.function(item[header.type])
												: item[header.type]}
										</Typography>
									) : (
										<CircleBg bgColor={item[header.type] ? 'bg-green-600' : 'bg-gray-400'} />
									)}
									{header.component}
									{/* {header.type(
										<IconButton
											icon={header.icon.icon}
											color={header.icon.color}
											className={header.icon.style}
											onClick={() => onClickActions(item, 'user')}
										/>
									)} */}
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
