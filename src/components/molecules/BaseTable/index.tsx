import React from 'react';
import { Card, Typography } from '@ui/atoms';
import { LoadingSpinner } from '../Loading';
import { NoResult } from '../NoResult';
import { CircleBg } from '@ui/atoms/CircleBg';
import { IconButton } from '@ui/atoms/BaseButton';
import { useTranslation } from 'react-i18next';
import { CircleBGBorder } from './CircleBGBorder';
import { ButtonLockAction } from './ButtonLockAction';
import { TableCircleBg } from './TableCircleBg';
import { BaseIcon } from '@ui/atoms';
import checkBoldIcon from '@iconify-icons/ph/check-bold';
import xIcon from '@iconify-icons/ph/x';

export function BaseTable(props) {
	const { headers, data, loading, onClick } = props;
	const { t } = useTranslation();

	const defaultIconColor = ['bg-green-600', 'bg-red-600'];

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
									className={`${header.style} flex justify-center items-center `}
									dir={!header.dir ? 'ltr' : header.dir}>
									{!header?.status?.load && (
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
									)}
									{header.status?.load === 'CircleBg' && (
										<TableCircleBg
											color={header.status?.color}
											defaultIconColor={defaultIconColor}
											condition={item[header.status.key || header.type]}
										/>
									)}

									{typeof header?.status === 'object' && header?.status.load === 'check' && (
										<BaseIcon
											icon={!item[header.status.key].is_globally_config ? xIcon : checkBoldIcon}
											color={!item[header.status.key].is_globally_config ? 'red' : 'teal'}
										/>
									)}
									{typeof header?.status === 'object' &&
										header.status.load === 'CircleBgBorder' && (
											<CircleBGBorder
												icon={item[header.status.key] ? 'bg-red-600' : 'bg-green-400'}
												title={item[header.type]}
											/>
										)}

									{header.type === 'component' && <header.component {...props} item={item} />}
									{header.type === 'action' &&
										header.actions.map((action, index) => (
											<IconButton
												key={index}
												{...action}
												onClick={() => onClick(action.action, item)}
											/>
										))}
									{header.type === 'actionLock' && (
										<ButtonLockAction onclick={onClick} user={item} />
									)}
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
