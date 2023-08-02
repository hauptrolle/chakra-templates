import {
  Box,
  Input,
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  useMediaQuery,
  ButtonGroup,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';
import { MdPages } from 'react-icons/md';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  Row,
  SortingRule,
  useTable,
  useSortBy,
  usePagination,
  Column,
} from 'react-table'; /*
For the dependency install: "react-table"
For the devDependency install: "@types/react-table"
Don't forget to add to your project in "src/" a folder called "types/" inside this a file called "file-name.d.ts"
 e.g."custom-react-table.d.ts", where you add the react table types related to sorting and pagination needed for this code to work properly, 
 for more information visit-> https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
*/

// Define types for your data
interface Data {
  ID: number;
  name: string;
  age: number;
  occupation: string;
}

function Table({
  columns,
  data,
  onSort,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  defaultPageSize,
}: {
  columns: Column<Data>[];
  data: Data[];
  onSort: (params: {
    sortBy: SortingRule<Data>[];
    pageIndex: number;
    pageSize: number;
  }) => void;
  fetchData: (params: { pageIndex: number; pageSize: number }) => void;
  loading: boolean;
  pageCount: number;
  defaultPageSize: number;
}) {
  const {
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      manualSortBy: true,
      autoResetPage: false,
      autoResetSortBy: false,
      pageCount: controlledPageCount,
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    onSort({ sortBy, pageIndex, pageSize });
    fetchData({ pageIndex, pageSize });
  }, [onSort, sortBy, fetchData, pageIndex, pageSize]);

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    // Call setPageSize(defaultPageSize) once when the component mounts
    setPageSize(defaultPageSize);
  }, []);

  return (
    <>
      <Box p="1rem" overflow="auto">
        <ChakraTable
          variant="striped"
          size={isLargerThan768 ? 'md' : 'sm'} // Use smaller size on smaller screens
          style={{ width: '100%' }}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <Flex alignItems="center">
                      {/* Wrap in a Flex container */}
                      {column.render('Header')}
                      {/* Add a sort direction indicator */}
                      {column.isSorted ? (
                        <Box as="span" ml="2">
                          {/* Wrap the sort indicator in a Box */}
                          {column.isSortedDesc ? (
                            <FiArrowDown />
                          ) : (
                            <FiArrowUp />
                          )}
                        </Box>
                      ) : null}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {page.map((row: Row<Data>) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  ))}
                </Tr>
              );
            })}
            <Tr>
              {loading ? (
                // Use our custom loading state to show a loading indicator
                <Td
                  colSpan={headerGroups[0].headers.length}
                  style={{ backgroundColor: 'white' }}>
                  Loading...
                </Td>
              ) : (
                <Td
                  colSpan={headerGroups[0].headers.length}
                  style={{ backgroundColor: 'white' }}>
                  Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                  results
                </Td>
              )}
            </Tr>
          </Tbody>
        </ChakraTable>
      </Box>
      <Box id="pagination">
        <Flex
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justifyContent={'center'}
          alignItems="center"
          gap={1}
          fontSize={{ base: 'sm', md: 'md' }}>
          <ButtonGroup>
            <IconButton
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              icon={<ArrowLeftIcon />}
              aria-label={''}
            />

            <IconButton
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              icon={<ChevronLeftIcon />}
              aria-label={''}
            />
            <IconButton
              onClick={() => nextPage()}
              disabled={!canNextPage}
              icon={<ChevronRightIcon />}
              aria-label={''}
            />
            <IconButton
              onClick={() => gotoPage(controlledPageCount - 1)}
              disabled={!canNextPage}
              icon={<ArrowRightIcon />}
              aria-label={''}
            />
          </ButtonGroup>
          <Box padding={1}>
            Page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Box>
          <Box padding={1}>
            | Go to page:{' '}
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '80px' }}
            />
          </Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<MdPages />}
              w={{ base: '35%', sm: 'auto' }}
              fontSize={{ base: 'sm', md: 'md' }}>
              Show {pageSize}
            </MenuButton>
            <MenuList minWidth={'7rem'}>
              {[3, 10, 20, 30, 40, 50].map((size) => (
                <MenuItem key={size} onClick={() => setPageSize(size)}>
                  Show {size}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  );
}

function TableWithSortingAndPagination() {
  const columns: Column<Data>[] = useMemo(
    () => [
      { Header: 'ID', accessor: 'ID', show: true },
      { Header: 'Name', accessor: 'name', show: true },
      { Header: 'Age', accessor: 'age', show: true },
      { Header: 'Occupation', accessor: 'occupation', show: true },
    ],
    []
  );

  const initialData = [
    { ID: 1, name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { ID: 2, name: 'Smitha Nara', age: 28, occupation: 'Data Scientist' },
    { ID: 3, name: 'Michael Johnson', age: 32, occupation: 'Web Developer' },
    { ID: 4, name: 'Emily Williams', age: 25, occupation: 'Graphic Designer' },
    { ID: 5, name: 'William Brown', age: 27, occupation: 'UX/UI Designer' },
    { ID: 6, name: 'Olivia Lee', age: 31, occupation: 'Product Manager' },
    { ID: 7, name: 'James Davis', age: 29, occupation: 'Data Analyst' },
    { ID: 8, name: 'Sophia Martin', age: 26, occupation: 'Frontend Developer' },
    {
      ID: 9,
      name: 'Benjamin Wilson',
      age: 33,
      occupation: 'Backend Developer',
    },
    { ID: 10, name: 'Ava Anderson', age: 28, occupation: 'Quality Assurance' },
    {
      ID: 11,
      name: 'Alexander Garcia',
      age: 30,
      occupation: 'DevOps Engineer',
    },
    { ID: 12, name: 'Mia Martinez', age: 29, occupation: 'Data Engineer' },
    // Add more data rows as needed
  ];

  const [data, setData] = useState<Data[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState<{
    sortBy: SortingRule<Data>[];
    isSorting: boolean;
  }>({ sortBy: [], isSorting: false });

  // Pagination state
  const [pageCount, setPageCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(3); // Set default page size here!

  const fetchIdRef = useRef(0);

  // Create a separate sorting function
  const sortData = useCallback((data: Data[], sortBy: SortingRule<Data>[]) => {
    const sortedData = data.slice();
    for (const rule of sortBy) {
      sortedData.sort((a, b) => {
        if (a[rule.id as keyof Data] > b[rule.id as keyof Data])
          return rule.desc ? -1 : 1;
        if (a[rule.id as keyof Data] < b[rule.id as keyof Data])
          return rule.desc ? 1 : -1;
        return 0;
      });
    }
    return sortedData;
  }, []);

  const fetchData = useCallback(
    ({ pageIndex, pageSize }: { pageIndex: number; pageSize: number }) => {
      const fetchId = ++fetchIdRef.current;
      setLoading(true);
      setPageIndex(pageIndex);
      setPageSize(pageSize);
      // Simulate fetching data from a server with a delay
      setTimeout(() => {
        if (fetchId === fetchIdRef.current) {
          // Sort the initialData first based on sorting rules
          const sortedData = sortData(initialData, sorting.sortBy);

          // Update the state with the sorted data
          setData(sortedData);

          // Calculate page count based on the sorted data
          setPageCount(Math.ceil(sortedData.length / pageSize));

          // Calculate the start and end indexes for the current page
          const startRow = pageIndex * pageSize;
          const endRow = startRow + pageSize;

          // Slice the data to display the current page
          setData(sortedData.slice(startRow, endRow));

          setLoading(false);
        }
      }, 300);
    },
    [sortData, sorting.sortBy]
  );

  const handleSort = useCallback(
    ({ sortBy }: { sortBy: SortingRule<Data>[] }) => {
      setSorting({
        sortBy,
        isSorting: true,
      });
    },
    []
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <>
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        onSort={handleSort}
        defaultPageSize={pageSize}
      />
    </>
  );
}

export default TableWithSortingAndPagination;
