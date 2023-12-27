import { useCallback, useState } from 'react';
import { IDaAs } from '@src/services/users/types';
import useSWR from 'swr';
import { http } from '@src/services/http';
import { IResponsePagination } from '@src/types/services';
import { E_USERS_DAAS } from '@src/services/users/endpoint';
import Pagination from '@ui/molecules/Pagination';
import { createAPIEndpoint } from '@src/helper/utils';
import { debounce } from 'lodash';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { BaseTable } from '@ui/molecules/BaseTable';
import { monitoringTableData } from '../monitoringTableData';
import { useNavigate } from 'react-router-dom';

const PAGE_SIZE = 8;
const PAGE = 1;

export function UsersDaAsList() {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState<number>(PAGE);
	const [filterQuery, setFilterQuery] = useState<string>('');

	const endpoint = createAPIEndpoint({
		endPoint: E_USERS_DAAS,
		pageSize: PAGE_SIZE,
		currentPage,
		filterQuery,
	});
	const { data, isLoading } = useSWR<IResponsePagination<IDaAs>>(endpoint, http.fetcherSWR);

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

	const listDaas = data?.data?.results ?? [];
	const countPage = data?.data?.count || 0;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const userHandler = (url: any, list: any) => {
		return navigate(`${url}/${list.email}`);
	};

	return (
		<div className="w-full p-4">
			<div className="flex items-center justify-between">
				<SearchInput
					name="search"
					value={filterQuery}
					onChange={handleFilterChange}
					className="w-1/4"
				/>
			</div>
			<BaseTable
				headers={monitoringTableData({ onchange: userHandler })}
				data={listDaas}
				onClick={userHandler}
			/>
			{/* <UserDaAsCard daas={headerItem} isHeader />
			{isLoading ? (
				<LoadingSpinner />
			) : listDaas.length > 0 ? (
				listDaas.map((item) => <UserDaAsCard key={item.id} daas={item} />)
			) : (
				<NoResult />
			)} */}
			{!!countPage && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(countPage / PAGE_SIZE)}
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	);
}
