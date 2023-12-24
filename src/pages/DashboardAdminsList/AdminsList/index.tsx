import { IconButton } from '@ui/atoms/BaseButton';
import plusIcon from '@iconify-icons/ph/plus';
import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { IResponsePagination } from '@src/types/services';
import { http } from '@src/services/http';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { StringifyProperties } from '@src/types/global';
import { ActionOnClickActionsType } from './UserAdminCard/types';
import Pagination from '@ui/molecules/Pagination';
import { Modal } from '@ui/molecules/Modal';
import { UpdateAdminModal } from './UpdateAdminModal';
import { toast } from 'react-toastify';
import ToolTip from '@ui/atoms/Tooltip';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { E_USERS } from '@src/services/users/endpoint';
import { IUser } from '@src/services/users/types';
import { createAPIEndpoint } from '@src/helper/utils';
import { debounce } from 'lodash';
import { API_USERS_DELETE } from '@src/services/users';
import { BaseTable } from '@ui/molecules/BaseTable';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { booleanIcon } from './utils';
import { UserAdminAction } from './UserAdminAction';

const PAGE_SIZE = 10;
const PAGE = 1;

// const headerItem: StringifyProperties<IUser> = {
// 	id: '',
// 	email: 'ایمیل',
// 	last_login: 'آخرین ورود',
// 	username: 'نام کاربری',
// 	first_name: 'نام و نام خانوادگی',
// 	is_active: 'فعال',
// 	created_at: 'تاریخ ایجاد',
// 	is_meta_admin: 'سوپر ادمین',
// 	last_name: '',

// 	is_superuser: 'boolean',
// 	exceeded_usage: 'boolean',
// 	base_url: 'string',
// 	is_staff: 'boolean',
// 	date_joined: 'string',
// 	http_port: 'number',
// 	https_port: 'number',
// 	time_limit_duration: 'ETimeLimitDuration',
// 	time_limit_value_in_hour: 'number',
// 	last_uptime: 'string',
// 	is_running: 'boolean',
// 	exceeded_time_limit: 'boolean',
// 	usage_in_minute: 'number',
// };

export function AdminsList() {
	const [currentPage, setCurrentPage] = useState<number>(PAGE);
	const [filterQuery, setFilterQuery] = useState<string>('');
	const [activeAdmin, setActiveAdmin] = useState<Partial<IUser>>();
	const [deleteModal, setDeleteModal] = useState(false);
	const [openUpdateModal, setOpenUpdateModal] = useState(false);
	const [loadingButtonModal, setLoadingButtonModal] = useState(false);

	const endpoint = createAPIEndpoint({
		endPoint: E_USERS,
		pageSize: PAGE_SIZE,
		currentPage,
		filterQuery,
	});

	const { data, isLoading, mutate } = useSWR<IResponsePagination<IUser>>(endpoint, http.fetcherSWR);

	const debouncedSetFilterQuery = useCallback(
		debounce((query: string) => {
			setCurrentPage(PAGE);
			setFilterQuery(query);
		}, 1000),
		[]
	);

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		debouncedSetFilterQuery(event.target.value);
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	const listWhiteList = data?.data?.results ?? [];
	const countPage = data?.data?.count || 0;

	const handleOnDeleteFileType = async () => {
		if (!activeAdmin) return;
		setLoadingButtonModal(true);

		await API_USERS_DELETE(activeAdmin?.id as number)
			.then(() => {
				mutate();
				toast.success('با موفقیت حذف شد');
				setDeleteModal(false);
			})
			.catch((err) => {
				toast.error(err);
			})
			.finally(() => {
				setLoadingButtonModal(false);
			});
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleCloseUpdateModal = (isMutate?: boolean) => {
		if (isMutate) {
			mutate();
		}
		setOpenUpdateModal(false);
	};

	function handleOnClickActions(
		action: ActionOnClickActionsType,
		fileType?: StringifyProperties<IUser> | IUser
	): any {
		setActiveAdmin(fileType as IUser);
		console.log('CALL');
		console.log(fileType, 'ACTION');

		if (action === 'delete') {
			setDeleteModal(true);
			return;
		}

		if (action === 'edit') {
			setOpenUpdateModal(true);
			return;
		}

		// if (daas !== undefined && typeof daas !== "string") {
		//   setActionOnClick(action);
		//   setActiveDaas(daas);
		//   setDeleteModal(true);
		// }
	}

	console.log(activeAdmin, 'ACTION   =>');
	const handleCreateAdmin = () => {
		activeAdmin && setActiveAdmin(undefined);
		setOpenUpdateModal(true);
	};

	const headerData = [
		{
			id: '',
			label: '',
			type: '',
			modal: '',
			component: UserAdminAction,
			function: handleOnClickActions,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'نام کاربری',
			type: 'username',
			modal: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'ایمیل',
			type: 'email',
			modal: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'نام و نام خانوادگی',
			type: ['first_name', 'last_name'],
			modal: '',
			function: false,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'فعال',
			type: 'is_active',
			modal: '',
			function: false,
			style: 'px-3 w-2/12   ',
			status: 'is_active',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'سوپر ادمین',
			type: 'is_meta_admin',
			modal: '',
			function: booleanIcon,
			style: 'px-3 w-2/12   ',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'تاریخ ایجاد',
			type: 'created_at',
			dir: 'rtl',
			modal: '',
			icon: false,
			function: persianDateAndNumber,
			style: ' w-2/12 break-words',
			size: '',
			scroll: '',
		},
		{
			id: '',
			label: 'آخرین ورود',
			type: 'last_login',
			dir: 'rtl',
			modal: '',
			icon: false,
			function: persianDateAndNumber,
			style: ' w-2/12 break-words',
			size: '',
			scroll: '',
		},
	];

	return (
		<div className="w-full p-4">
			<div className="flex justify-between items-center">
				<SearchInput
					name="search"
					value={filterQuery}
					onChange={handleFilterChange}
					className="w-1/4"
				/>
				<ToolTip tooltip="اضافه کردن ادمین جدید" position="right">
					<IconButton icon={plusIcon} color="teal" size="lg" onClick={handleCreateAdmin} />
				</ToolTip>
			</div>

			<BaseTable headers={headerData} data={listWhiteList} loading={isLoading} />
			{!!countPage && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(countPage / PAGE_SIZE)}
					onPageChange={handlePageChange}
				/>
			)}
			<Modal
				open={deleteModal}
				setOpen={setDeleteModal}
				type="error"
				title="از انجام این کار مطمئن هستید؟"
				buttonOne={{
					label: 'بله',
					onClick: handleOnDeleteFileType,
					loading: loadingButtonModal,
				}}
				buttonTow={{
					label: 'خیر',
					onClick: () => setDeleteModal(false),
					color: 'red',
				}}
			/>
			<Modal
				open={openUpdateModal}
				setOpen={setOpenUpdateModal}
				type="success"
				content={<UpdateAdminModal handleClose={handleCloseUpdateModal} admin={activeAdmin} />}
			/>
		</div>
	);
}
